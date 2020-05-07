import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Register from '../pages/Register';
import Login from '../pages/Login';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
);

export default AuthRoutes;
