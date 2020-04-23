import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { colors } from '../../../utils'

const Input = ({placeholder, ...rest}) => {
    return (
        <View>
           <TextInput style={styles.input}
           placeholder={placeholder}
           placeholderTextColor={colors.default}
          {...rest}
            />
        </View>
    )
}

export default Input



const styles = StyleSheet.create({
input:{
    borderWidth:1, 
    borderColor: colors.default, 
    color: colors.default, 
    borderRadius:25,
    paddingHorizontal: 20,
    paddingVertical:10,
    fontSize:15,

}
})
