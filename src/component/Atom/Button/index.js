import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../../utils'
import ButtonIcon from './ButtonIcon';

const Button = ({ title, onPress, type, name, }) => {
    if (type === 'icon') {
        return <ButtonIcon name={name} onPress={onPress} />
    }
    return (
        <TouchableOpacity
            style={styles.viewButton} onPress={onPress}>
            <Text
                style={styles.textButton}>
                {title}
            </Text>
        </TouchableOpacity>

    )
}

export default Button;

const styles = StyleSheet.create({
    viewButton: {
        backgroundColor: colors.default,
        borderRadius: 25,
        paddingVertical: 15,
    },
    textButton: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center',

    }

})