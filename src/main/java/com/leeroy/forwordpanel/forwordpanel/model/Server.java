package com.leeroy.forwordpanel.forwordpanel.model;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

/**
 * 端口信息
 */
@Entity
@Data
public class Server {

    @Id
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;


    /**
     * 服务器所有者
     */
    private Integer ownerId;

    /**
     * 服务器名称
     */
    private String serverName;

    /**
     * 服务器host
     */
    private String host;

    /**
     * ssh端口
     */
    private Integer port;

    /**
     * 服务器 key
     */
    private String key;

    /**
     * 密码
     */
    private String username;

    /**
     * 用户名
     */
    private String password;

    /**
     * 服务器状态
     */
    private Integer state;

    private Date createTime;

    private Date updateTime;

    private Boolean deleted;
    /**
     * 最后一次重启时间
     */
    private String lastRebootTime;


}
