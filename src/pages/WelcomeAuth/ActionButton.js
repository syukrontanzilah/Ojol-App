import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { colors } from '../../utils';
import { Button } from '../../component';



const ActionButton = ({ desc, title, onPress }) => {
    return (
        <View style={styles.wrapper}>
            <Text 
            style={styles.textInfo}>
                    {desc}
                    </Text>

            <Button title ={title} onPress={onPress}/>

        </View>
    )
}

export default ActionButton;

const styles = StyleSheet.create({
    wrapper:{
        marginBottom: 40, 
        maxWidth: 200
    },
    textInfo:{
        fontSize: 10, 
        color: colors.text.default, 
        textAlign: 'center', 
        paddingHorizontal: '15%', 
        marginBottom: 10
    },
})