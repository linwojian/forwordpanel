package com.leeroy.forwordpanel.forwordpanel.common.util.remotessh;

import com.jcraft.jsch.ChannelExec;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.Session;
import com.leeroy.forwordpanel.forwordpanel.model.Server;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.CollectionUtils;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedDeque;

/**
 * @program: forwordpanel
 * @description: 会话池
 * @author: liruifeng
 * @created: 2020/10/22 07:08
 */
@Slf4j
public class SessionPool {

    private  final Map<Integer, ConcurrentLinkedDeque<Session>> sessionPoolMap = new ConcurrentHashMap<>();

    private  Integer sessionMaxSize = 5;

    private Server server;

    private Integer makeSize = 0;
    private Integer releaseSize = 0;


    /**
     * 获取session
     *
     * @return
     */
    public synchronized Session getSession() {
        ConcurrentLinkedDeque<Session> sessionPool = sessionPoolMap.get(server.getId());
        if (sessionPool == null) {
            sessionPool = new ConcurrentLinkedDeque<>();
            sessionPoolMap.put(server.getId(), sessionPool);
        }
        if (CollectionUtils.isEmpty(sessionPool)) {
            Session session = makeSession();
            sessionPool.add(session);
        }
        if (CollectionUtils.isEmpty(sessionPool)) {
            return null;
        }
        Session session = sessionPool.pollLast();
        log.info(">>>>get session server {} session pool size {}", server.getServerName(), sessionPool.size());
        if (!session.isConnected() || !testSession(session)) {
            log.error("session失效, 重新make session");
            session = makeSession();
        }
        return session;
    }

    /**
     * 释放session
     * @param session
     */
    public synchronized void release(Session session) {
        try {
            releaseSize++;
            log.error(">>>> release times:{}", releaseSize);
            ConcurrentLinkedDeque<Session> sessionPool = sessionPoolMap.get(server.getId());
            sessionPool.push(session);
            log.info(">>>>release session server {} session pool size {}", server.getServerName(), sessionPool.size());
        }catch (Exception e){
            log.error("错误",e);
        }

    }

    /**
     * 测试session
     * @param session
     * @return
     */
    private boolean testSession(Session session) {
        try {
            ChannelExec testChannel = (ChannelExec) session.openChannel("exec");
            testChannel.setCommand("true");
            testChannel.connect();
            if (log.isDebugEnabled()) {
                log.debug("Session successfully tested, use it again.");
            }
            testChannel.disconnect();
            return true;
        } catch (Throwable t) {
            log.info("Session terminated. Create a new one.");
            try {
                session.disconnect();
            }catch (Exception e){
                log.info("Session disconnect");
            }

        }
        return false;
    }

    /**
     * 创建session
     * @return
     */
    private Session makeSession() {
        try {
            makeSize++;
            log.error(">>>> make times:{}", makeSize);
            JSch jsch = new JSch();
            MyUserInfo userInfo = new MyUserInfo();
            Session session = jsch.getSession(server.getUsername(), server.getHost(), server.getPort());
            session.setPassword(server.getPassword());
            session.setUserInfo(userInfo);
            session.setDaemonThread(true);
            session.setTimeout(3600000);
            session.setServerAliveInterval(60000);
            session.connect();
            log.error(">>>> make session");
            return session;
        } catch (Exception e) {
            log.error("make session error, server is{} ", server.getServerName());
            return null;
        }
    }

    public SessionPool(Server server) {
        this.server = server;
        //定时清理session
        Timer timer = new Timer(true);
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                for (ConcurrentLinkedDeque<Session> sessionLinkedList : sessionPoolMap.values()) {
                    if (sessionLinkedList.size() > sessionMaxSize) {
                        log.info(">>>> session pool size over {} clean", sessionMaxSize);
                        for (int i = 0; i < sessionLinkedList.size() - sessionMaxSize; i++) {
                            Session session = sessionLinkedList.removeLast();
                            try {
                                session.disconnect();
                            }catch (Exception e){
                                log.error("session 释放失败", e);
                            }

                        }
                    }
                }
            }
        }, 1000 * 60 * 3, 1000 * 60 * 1);
    }
}
