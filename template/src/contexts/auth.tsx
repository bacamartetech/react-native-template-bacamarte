import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

type User = {
    id?: number;
    name: string;
    email: string;
    password?: string;
};

type AuthContextData = {
    logged: boolean;
    user: User | null;
    loading: boolean;
    register({ name, email }: { name: string; email: string }): Promise<void>;
    login({ email, password }: { email: string; password: string }): Promise<void>;
    logout(): void;
};

type RegisterResponse = {
    token: string;
    user: User;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getStoredValues() {
            const [[, storedUser], [, storedToken]] = await AsyncStorage.multiGet([
                '@RNAppTeste:user',
                '@RNAppTeste:token',
            ]);

            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }

            if (storedToken) {
                api.defaults.headers.Authorization = `Bearer ${storedToken}`;
            }

            setLoading(false);
        }

        getStoredValues();
    }, []);

    async function register({ name, email }: { name: string; email: string }) {
        const response = await new Promise<RegisterResponse>((resolve) => {
            setTimeout(
                () =>
                    resolve({
                        token: 'sasd6f54ad4s5f65asd65g456a4ds56g56adf56g4',
                        user: {
                            id: Date.now(),
                            name: name,
                            email: email,
                        },
                    }),
                1500
            );
        });

        setUser(response.user);

        api.defaults.headers.Authorization = `Bearer ${response.token}`;

        await AsyncStorage.multiSet([
            ['@RNAppTeste:user', JSON.stringify(response.user)],
            ['@RNAppTeste:token', response.token],
        ]);
    }

    async function login({ email, password }: { email: string; password: string }) {
        const response = await new Promise<RegisterResponse>((resolve) => {
            setTimeout(
                () =>
                    resolve({
                        token: 'sasd6f54ad4s5f65asd65g456a4ds56g56adf56g4',
                        user: {
                            id: Date.now(),
                            name: 'Chunda Lover',
                            email: email,
                            password: password,
                        },
                    }),
                1500
            );
        });

        setUser(response.user);

        api.defaults.headers.Authorization = `Bearer ${response.token}`;

        await AsyncStorage.multiSet([
            ['@RNAppTeste:user', JSON.stringify(response.user)],
            ['@RNAppTeste:token', response.token],
        ]);
    }

    function logout() {
        AsyncStorage.multiRemove(['@RNAppTeste:user', '@RNAppTeste:token']).then(() => setUser(null));
    }

    return (
        <AuthContext.Provider value={{ logged: Boolean(user), user, loading, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthContext;
