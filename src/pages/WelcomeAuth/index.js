import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import ActionButton from './ActionButton'
import { colors } from '../../utils';





const WelcomeAuth = ({navigation}) => {
    const handleGoTo = (screen) =>{
        navigation.navigate(screen)
    }
    return (
        <View style={styles.wrapper}>
            <View style={styles.bckgImage}>
                <Image style={styles.bckgImage} source={require('../../asset/icon/ojol.jpeg')} />
            </View>
            <Text style={styles.text}>Selamat datang di OJOL</Text>
            <ActionButton
                desc='Silahkan masuk jika sudah memiliki akun'
                title='Masuk'
                onPress={()=>handleGoTo('Login')} />
            <ActionButton
                desc='Silahkan daftar jika anda belum memiliki akun'
                title='daftar yuk bro'
                onPress={()=>handleGoTo('Register')} />

        </View>
    )
}

export default WelcomeAuth;

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    bckgImage: {
        width: 220,
        height: 130,
        marginBottom: 70, 
        borderRadius:15,
    },
    text: {
        fontSize: 18,
        color: colors.default
    }
})