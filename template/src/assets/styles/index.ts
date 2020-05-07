import { StyleSheet } from 'react-native';

import colors from './colors';

const styles = StyleSheet.create({
    mainButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.danger,
        width: '100%',
        padding: 25,
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 4,
        elevation: 4,
    },

    mainButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },

    mainButtonIcon: {
        fontSize: 36,
        color: '#ffffff',
        marginRight: 10,
    },

    label: {
        fontWeight: 'bold',
        fontSize: 14,
        color: colors.primaryDark,
        marginBottom: 5,
        elevation: 2,
    },

    input: {
        height: 55,
        backgroundColor: '#ffffff',
        paddingHorizontal: 15,
        width: '100%',
        fontSize: 16,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 4,
        elevation: 2,
        justifyContent: 'center',
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primaryDark,
        width: '100%',
        height: 55,
        borderRadius: 4,
        elevation: 2,
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#ffffff',
    },

    buttonIcon: {
        fontSize: 24,
        color: '#ffffff',
        marginRight: 10,
    },

    box: {
        backgroundColor: '#ffffff',
        padding: 15,
        width: '100%',
        borderRadius: 4,
        elevation: 2,
    },
});

export { colors, styles };
