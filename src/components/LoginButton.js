import { Button, StyleSheet, View} from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const LoginButton = ({title, color, onPress, newStyles}) => {
  return (
    <View style={{...styles.loginButton, ...newStyles}}>
        <Button title={title} color={color} onPress={onPress}/>
    </View>
)
}

export default LoginButton

const styles = StyleSheet.create({
    loginButton:{
        width:"80%",
        borderRadius:8,
        marginVertical:4,
        backgroundColor:colors.mistyRose,
        shadowColor: colors.black,
        shadowRadius: 10, 
        shadowOpacity: 0.6,
        elevation: 1
    }
})