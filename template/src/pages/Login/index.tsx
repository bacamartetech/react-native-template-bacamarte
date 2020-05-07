import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import Container from '../../components/Container';
import { styles, colors } from '../../assets/styles';
import { useAuthContext } from '../../contexts/auth';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const { login } = useAuthContext();

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setEmail('');
            setPassword('');
            setErrorEmail('');
            setErrorPassword('');
        });

        return () => unsubscribe();
    }, [navigation]);

    function handleLogin() {
        setErrorEmail('');
        setErrorPassword('');

        if (!email) {
            return setErrorEmail('Preenchimento obrigatório.');
        }

        if (!password) {
            return setErrorPassword('Preenchimento obrigatório.');
        }

        try {
            login({ email, password });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={[styles.label, { fontSize: 36, textAlign: 'center' }]}>Login</Text>

            <Text style={[styles.label, errorEmail ? { color: colors.danger } : {}]}>E-mail</Text>
            <TextInput
                value={email}
                keyboardType="email-address"
                onChangeText={(v) => setEmail(v)}
                style={[styles.input, errorEmail ? { borderColor: colors.danger } : {}]}
            />
            <Text style={[styles.label, { backfaceVisibility: 'visible', color: colors.danger }]}>{errorEmail}</Text>

            <Text style={[styles.label, errorPassword ? { color: colors.danger } : {}]}>Senha</Text>
            <TextInput
                value={password}
                secureTextEntry={true}
                onChangeText={(v) => setPassword(v)}
                style={[styles.input, errorPassword ? { borderColor: colors.danger } : {}]}
            />
            <Text style={[styles.label, { backfaceVisibility: 'visible', color: colors.danger }]}>{errorPassword}</Text>

            <TouchableOpacity style={[styles.button, { marginTop: 21 }]} onPress={handleLogin}>
                <Icon name="account-check" style={styles.buttonIcon} />
                <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[
                    styles.button,
                    {
                        backgroundColor: 'transparent',
                        borderWidth: 1,
                        borderColor: colors.primaryDark,
                        elevation: 0,
                        marginTop: 21,
                    },
                ]}
                onPress={() => navigation.navigate('Register')}>
                <Icon name="account-plus" style={[styles.buttonIcon, { color: colors.primaryDark }]} />
                <Text style={[styles.buttonText, { color: colors.primaryDark }]}>Quero me cadastrar</Text>
            </TouchableOpacity>
        </Container>
    );
};

export default Login;
