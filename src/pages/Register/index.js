import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Input, Button } from '../../component';
import { colors } from '../../utils';
import { useSelector, useDispatch } from 'react-redux'
import { setForm } from '../../redux';


const Register = ({ navigation }) => {
    const { form } = useSelector((state) => state.RegisterReducer)
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
            {/* back button */}
            <Button type='icon' name='back' onPress={() => navigation.goBack()} />

            <View style={styles.bckgImage}>
                <Image style={styles.bckgImage} source={require('../../asset/icon/gojek.png')} />
            </View>

            <Text style={styles.textDesc}>Silahkan mengisi data diri kamu secara lengkap disini untuk proses registrasi kamu..</Text>

            <View style={styles.space(65)} />

            <Input placeholder='Nama Lengkap' value={form.fullname} onChangeText={(value) => onInputChange(value, 'fullname')} />

            <View style={styles.space(25)} />
            <Input placeholder='Email' value={form.email} onChangeText={(value) => onInputChange(value, 'email')} />

            <View style={styles.space(25)} />
            <Input placeholder='Password' value={form.password} onChangeText={(value) => onInputChange(value, 'password')}
                secureTextEntry={true} />

            <View style={styles.space(50)} />
            <Button title='daftar' onPress={sendData} />
            <View style={styles.space(40)} />




        </ScrollView>
    )
}

export default Register;

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