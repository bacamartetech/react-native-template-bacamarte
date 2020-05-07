import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Loading: React.FC = () => (
    <View
        style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="tomato" />
    </View>
);

export default Loading;
