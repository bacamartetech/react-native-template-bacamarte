import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Main from '../pages/Main';
import Profile from '../pages/Profile';
import { colors } from '../assets/styles';

const AppStack = createBottomTabNavigator();

const tabBarOptions = {
    labelStyle: {
        fontSize: 12,
    },
    style: {
        height: 50,
        backgroundColor: '#ffffff',
    },
    tabStyle: {
        paddingTop: 6,
        paddingBottom: 4,
    },
    inactiveTintColor: '#aaaaaa',
    activeTintColor: colors.primary,
    showLabel: true,
};

const AppRoutes: React.FC = () => (
    <AppStack.Navigator tabBarOptions={tabBarOptions}>
        <AppStack.Screen
            name="Home"
            component={Main}
            options={{ tabBarIcon: ({ color }) => <Icon name="home" color={color} size={24} /> }}
        />
        <AppStack.Screen
            name="Meu Perfil"
            component={Profile}
            options={{ tabBarIcon: ({ color }) => <Icon name="account" color={color} size={24} /> }}
        />
    </AppStack.Navigator>
);

export default AppRoutes;
