import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native'

const ButtonIcon = ({...rest}) => {
    return (
        <View>
             <TouchableOpacity
             {...rest}>
                 {rest.name === 'back' &&     <View style={styles.iconBack}>
                    <Image style={{ width: 25, height: 25, borderRadius: 100, backgroundColor: 'purple' }} source={require('../../../asset/icon/back.png')} />
                </View> }
            
            </TouchableOpacity>
        </View>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({})
