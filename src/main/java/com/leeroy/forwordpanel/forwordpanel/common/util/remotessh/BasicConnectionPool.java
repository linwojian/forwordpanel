package com.leeroy.forwordpanel.forwordpanel.common.util.remotessh;

import com.jcraft.jsch.Session;

import java.util.ArrayList;
import java.util.List;

public class BasicConnectionPool
        implements ConnectionPool {

    private List<Session> connectionPool;
    private List<Session> usedConnections = new ArrayList<>();
    private static int INITIAL_POOL_SIZE = 10;

    public static void add(Session session) throws Exception {
        List<Session> pool = new ArrayList<>(INITIAL_POOL_SIZE);
        for (int i = 0; i < INITIAL_POOL_SIZE; i++) {
            pool.add(session);
        }
    }

    // standard constructors

    @Override
    public Session getConnection() {
        Session connection = connectionPool
                .remove(connectionPool.size() - 1);
        usedConnections.add(connection);
        return connection;
    }

    @Override
    public boolean releaseConnection(Session connection) {
        connectionPool.add(connection);
        return usedConnections.remove(connection);
    }


    public int getSize() {
        return connectionPool.size() + usedConnections.size();
    }

    // standard getters
}
