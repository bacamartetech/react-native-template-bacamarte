import React from 'react';
import { ScrollView, Image, ViewStyle, StyleProp } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SafeAreaView from 'react-native-safe-area-view';

import { colors } from '../../assets/styles';

type ContainerProps = {
    style?: StyleProp<ViewStyle>;
    withLogo?: boolean;
    children: React.ReactChild | any;
};

const Container: React.FC<ContainerProps> = ({ style = {}, withLogo = false, children }) => {
    return (
        <LinearGradient
            style={{ flex: 1, padding: 15 }}
            colors={[colors.gradientStart, colors.gradientEnd]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>
            <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always' }}>
                <ScrollView contentContainerStyle={style}>
                    {withLogo && (
                        <Image
                            source={require('../../assets/images/logo.png')}
                            style={{
                                marginBottom: 10,
                                height: 100,
                                width: undefined,
                                resizeMode: 'contain',
                            }}
                        />
                    )}
                    {children}
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default Container;
