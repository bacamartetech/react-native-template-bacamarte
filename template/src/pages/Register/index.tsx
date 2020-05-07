import React, { useState, useEffect } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import Container from '../../components/Container';
import { styles, colors } from '../../assets/styles';
import { useAuthContext } from '../../contexts/auth';

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const { register } = useAuthContext();

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            setName('');
            setEmail('');
            setErrorName('');
            setErrorEmail('');
        });

        return () => unsubscribe();
    }, [navigation]);

    function handleRegister() {
        setErrorName('');
        setErrorEmail('');

        if (!name) {
            return setErrorName('Preenchimento obrigatório.');
        }

        if (!email) {
            return setErrorEmail('Preenchimento obrigatório.');
        }

        try {
            register({ name, email });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={[styles.label, { fontSize: 36, textAlign: 'center' }]}>Cadastro</Text>

            <Text style={[styles.label, errorName ? { color: colors.danger } : {}]}>Nome</Text>
            <TextInput
                value={name}
                onChangeText={(v) => setName(v)}
                style={[styles.input, errorName ? { borderColor: colors.danger } : {}]}
            />
            <Text style={[styles.label, { backfaceVisibility: 'visible', color: colors.danger }]}>{errorName}</Text>

            <Text style={[styles.label, errorName ? { color: colors.danger } : {}]}>E-mail</Text>
            <TextInput
                value={email}
                onChangeText={(v) => setEmail(v)}
                style={[styles.input, errorEmail ? { borderColor: colors.danger } : {}]}
            />
            <Text style={[styles.label, { backfaceVisibility: 'visible', color: colors.danger }]}>{errorEmail}</Text>

            <TouchableOpacity style={[styles.button, { marginTop: 21 }]} onPress={handleRegister}>
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
                onPress={() => navigation.navigate('Login')}>
                <Icon name="arrow-left" style={[styles.buttonIcon, { color: colors.primaryDark }]} />
                <Text style={[styles.buttonText, { color: colors.primaryDark }]}>Cancelar</Text>
            </TouchableOpacity>
        </Container>
    );
};

export default Register;
