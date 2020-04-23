import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Input, Button } from '../../component';
import { colors } from '../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux'
import { setForm } from '../../redux';
import ButtonIcon from '../../component/Atom/Button/ButtonIcon';


const Login = ({ navigation }) => {
    const { form } = useSelector((state) => state.LoginReducer)
    const dispatch = useDispatch();


    const sendData = () => {
        console.log('data yang dikirim', form)
    }

    const onInputChange = (value, inputType) => {
        dispatch(setForm(inputType, value))
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.wrapping}>
            {/* button back */}
            <Button type='icon' name='back' onPress={() => navigation.goBack()} />

            <View style={styles.bckgImage}>
                <Image style={styles.bckgImage} source={require('../../asset/icon/alan1.png')} />
            </View>

            <Text style={styles.textDesc}>Silahkan masukan email dan password untuk masuk ke aplikasi OJOL</Text>

            <View style={styles.space(65)} />

            <View style={styles.space(25)} />
            <Input placeholder='Email' value={form.email} onChangeText={(value) => onInputChange(value, 'email')} />

            <View style={styles.space(25)} />
            <Input placeholder='Password' value={form.password} onChangeText={(value) => onInputChange(value, 'password')}
                secureTextEntry={true} />

            <View style={styles.space(50)} />
            <Button title='login' onPress={sendData} />
            <View style={styles.space(40)} />




        </ScrollView>
    )
}

export default Login;

const styles = StyleSheet.create({
    wrapping: {
        padding: 20
    },
    iconBack: {
        height: 25,
        width: 25,
    },
    bckgImage: {
        width: 120,
        height: 120,
        marginTop: 10,
        borderRadius: 10,
    },
    textDesc: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.default,
        marginTop: 20,
        maxWidth: 250
    },
    space: (value) => {
        return {
            height: value
        }
    }

})