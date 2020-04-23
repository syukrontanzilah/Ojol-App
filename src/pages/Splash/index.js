import React, {useEffect} from 'react';
import { View, Text, Image } from 'react-native';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('WelcomeAuth')
        }, 1000)
    })


    return (
        <View>
            <Text>Splash screenn</Text>
        </View>
    )
}

export default Splash;
