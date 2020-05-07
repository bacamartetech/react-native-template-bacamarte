import React from 'react';
import { Text, View, StyleSheet, Modal as RNModal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { colors } from '../../assets/styles';

type ModalProps = {
    title: string;
    visible: boolean;
    transparent: boolean;
    onClose(): void;
    children: React.ReactChildren | any;
};

const Modal: React.FC<ModalProps> = ({
    title = '',
    visible = false,
    transparent = false,
    onClose = () => {},
    children,
}) => {
    return (
        <RNModal visible={visible} transparent={transparent}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{title}</Text>
                <Icon name="close" style={styles.headerIcon} onPress={onClose} />
            </View>
            <View style={styles.body}>{children}</View>
        </RNModal>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        height: 60,
        backgroundColor: colors.gradientStart,
    },

    headerTitle: {
        fontSize: 16,
        color: '#ffffff',
        fontWeight: 'bold',
    },

    headerIcon: {
        fontSize: 24,
        color: '#ffffff',
    },

    body: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
});

export default Modal;
