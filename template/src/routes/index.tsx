import React from 'react';

import { useAuthContext } from '../contexts/auth';
import Loading from '../pages/Loading';

import AuthRoutes from './auth';
import AppRoutes from './app';

const Routes: React.FC = () => {
    const { logged, loading } = useAuthContext();

    if (loading) {
        return <Loading />;
    }

    return logged ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
