import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Routes from './routes';
import { AuthProvider } from './contexts/auth';

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <StatusBar translucent backgroundColor="transparent" />
            <AuthProvider>
                <SafeAreaProvider>
                    <Routes />
                </SafeAreaProvider>
            </AuthProvider>
        </NavigationContainer>
    );
};

export default App;
