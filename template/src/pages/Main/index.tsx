import React from 'react';
import { Text } from 'react-native';

import Container from '../../components/Container';

const Main: React.FC = () => {
    return (
        <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>HelloWorld</Text>
        </Container>
    );
};

export default Main;
