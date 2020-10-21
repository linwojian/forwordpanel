package com.leeroy.forwordpanel.forwordpanel.service;

import com.alibaba.fastjson.JSON;
import com.leeroy.forwordpanel.forwordpanel.common.util.remotessh.SSHCommandExecutor;
import com.leeroy.forwordpanel.forwordpanel.model.Server;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Service
public class RemoteForwardService {

    private Map<Server, SSHCommandExecutor> sshCommandExecutorMap = new ConcurrentHashMap<>();

    /**
     * 获取sshExecutor
     * @param server
     * @return
     */
    public SSHCommandExecutor getSshExecutor(Server server) {
        SSHCommandExecutor sshCommandExecutor = sshCommandExecutorMap.get(server);
        if(sshCommandExecutor==null){
            sshCommandExecutor = new SSHCommandExecutor(server);
            sshCommandExecutorMap.put(server, sshCommandExecutor);
        }
        return sshCommandExecutor;
    }



    /**
     * 添加转发
     *
     * @param remoteHost
     * @param remotePort
     * @param localPort
     */
    public void addForward(Server server,String remoteHost,  Integer remotePort,  Integer localPort) {
        SSHCommandExecutor sshExecutor = getSshExecutor(server);
        long p1 = System.currentTimeMillis();
        stopForward(server, remoteHost, remotePort, localPort);
        sshExecutor.execute((String.format("ip -o -4 addr list | grep -Ev '\\s(docker|lo)' | awk '{print $4}' | cut -d/ -f1 | grep -Ev '(^127\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$)|(^10\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}$)|(^172\\.1[6-9]{1}[0-9]{0,1}\\.[0-9]{1,3}\\.[0-9]{1,3}$)|(^172\\.2[0-9]{1}[0-9]{0,1}\\.[0-9]{1,3}\\.[0-9]{1,3}$)|(^172\\.3[0-1]{1}[0-9]{0,1}\\.[0-9]{1,3}\\.[0-9]{1,3}$)|(^192\\.168\\.[0-9]{1,3}\\.[0-9]{1,3}$)'", localPort, remoteHost, remotePort)));
        String localIp = sshExecutor.getResult();
        if(StringUtils.isEmpty(localIp)){
            sshExecutor.execute((String.format("ip -o -4 addr list | grep -Ev '\\s(docker|lo)' | awk '{print $4}' | cut -d/ -f1|head -n 1", localPort, remoteHost, remotePort)));
            localIp = sshExecutor.getResult();
        }
        long p2 = System.currentTimeMillis();
        log.info(">>>> token1 {}", p2-p1);
        sshExecutor.executeScript("turnOnNat.sh");
        sshExecutor.execute(
                String.format("iptables -t nat -A PREROUTING -p tcp --dport %d -j DNAT --to-destination %s:%d", localPort, remoteHost, remotePort),
                String.format("iptables -t nat -A PREROUTING -p udp --dport %d -j DNAT --to-destination %s:%d", localPort, remoteHost, remotePort),
                String.format("iptables -t nat -A POSTROUTING -p tcp -d %s --dport %d -j SNAT --to-source %s", remoteHost, remotePort, localIp),
                String.format("iptables -t nat -A POSTROUTING -p udp -d %s --dport %d -j SNAT --to-source %s", remoteHost, remotePort, localIp),
                String.format("iptables -n -v -L -t filter -x | grep %s | awk '{print $2}'", remoteHost)
        );
        long p3 = System.currentTimeMillis();
        log.info(">>>> token2 {}", p3-p2);
        String flow = sshExecutor.getResult();
        log.info("fow: {}", flow);
        if (StringUtils.isEmpty(flow)) {
            sshExecutor.execute((String.format("iptables -I FORWARD -s %s", remoteHost)));
        }
        long p4 = System.currentTimeMillis();
        log.info(">>>> token3 {}", p4-p3);
    }


    /**
     * 获取转发流量
     *
     * @param server
     * @param remotePort
     * @return
     */
    public String getPortFlow(Server server, String remoteHost, Integer remotePort) {
        SSHCommandExecutor sshExecutor = getSshExecutor(server);
        if(StringUtils.isEmpty(remoteHost)){
            return "0";
        }
        sshExecutor.execute(String.format("iptables -n -v -L -t filter -x | grep %s | awk '{print $2}'", remoteHost));
        String result = sshExecutor.getResult();
        result = result.replaceAll("\n", "");
        log.info("flow:{}", result);
        return StringUtils.isEmpty(result) ? "0" : result;
    }


    /**
     * 获取转发流量
     *
     * @param remoteHostList
     * @return
     */
    public Map<String, String> getPortFlowMap(Server server, List<String> remoteHostList) {
        SSHCommandExecutor sshExecutor = getSshExecutor(server);
        Map<String, String> resultMap = new HashMap<>();
        Map<String, String> commandList = new HashMap<>();
        for (String remoteHost : remoteHostList) {
            if(StringUtils.isEmpty(remoteHost)){
                resultMap.put(remoteHost, "0");
            }else {
                commandList.put(remoteHost,String.format("iptables -n -v -L -t filter -x | grep %s | awk '{print $2}'", remoteHost));
            }
        }

        sshExecutor.execute(commandList.values().toArray(new String[]{}));
        Vector<String> resultSet = sshExecutor.getResultSet();
        for (int i = 0; i < resultSet.size(); i++) {
            resultMap.put((String) commandList.keySet().toArray()[i],resultSet.get(i));
        }
        return resultMap;
    }


    /**
     * 重置流量
     *
     * @param remoteHost
     * @param remotePort
     */
    public void resetFlowCount(Server server, String remoteHost, Integer remotePort) {
        SSHCommandExecutor sshExecutor = getSshExecutor(server);
        sshExecutor.execute(String.format("iptables -D FORWARD -s %s", remoteHost), String.format("iptables -I FORWARD -s %s", remoteHost));
    }

    /**
     * 获取上次重启时间
      * @param server
     * @return
     */
    public String getLastRestart(Server server){
        SSHCommandExecutor sshExecutor = getSshExecutor(server);
        sshExecutor.execute("who -b");
        return sshExecutor.getResult();
    }

    public String checkIPV4Forward(Server server){
        SSHCommandExecutor sshExecutor = getSshExecutor(server);
        sshExecutor.executeScript("turnOnNat.sh");
        return sshExecutor.getResult();
    }

    /**
     * 重置流量
     *
     * @param remoteHost
     * @param remotePort
     */
    public void deleteFlowCount(Server server, String remoteHost, Integer remotePort) {
        SSHCommandExecutor sshExecutor = getSshExecutor(server);
        sshExecutor.execute(String.format("iptables -D FORWARD -p tcp --dport %s -d %s", remotePort, remoteHost), String.format("iptables -D FORWARD -p udp --dport %s -d %s", remotePort, remoteHost));
    }


    /**
     * 停止转发
     *
     * @param remoteHost
     * @param remotePort
     * @param localPort
     */
    public void stopForward(Server server, String remoteHost, Integer remotePort, Integer localPort) {
        SSHCommandExecutor sshExecutor = getSshExecutor(server);
        sshExecutor.executeScript("stopForward.sh", localPort.toString());
    }

    private String getForwardKey(String remoteHost, Integer remotePort, Integer localPort) {
        return remoteHost + remotePort + localPort;
    }


    public static void main(String[] args) {
        String a = " ";
        System.out.println();
    }
}
