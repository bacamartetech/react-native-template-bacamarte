import React from 'react';
import { Text, View } from 'react-native';

import { useAuthContext } from '../../contexts/auth';
import Container from '../../components/Container';
import { styles, colors } from '../../assets/styles';

const Profile = () => {
    const { user } = useAuthContext();

    return (
        <Container>
            <Text style={styles.label}>Nome</Text>
            <View style={[styles.box, { marginBottom: 10 }]}>
                <Text style={{ color: colors.gray }}>{user?.name}</Text>
            </View>

            <Text style={styles.label}>E-mail</Text>
            <View style={[styles.box, { marginBottom: 10 }]}>
                <Text style={{ color: colors.gray }}>{user?.email}</Text>
            </View>
        </Container>
    );
};

export default Profile;
