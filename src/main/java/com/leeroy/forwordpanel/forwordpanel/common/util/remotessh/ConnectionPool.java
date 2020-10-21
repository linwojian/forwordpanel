package com.leeroy.forwordpanel.forwordpanel.common.util.remotessh;

import com.jcraft.jsch.Session;

public interface ConnectionPool {
    Session getConnection();

    boolean releaseConnection(Session connection);

}
