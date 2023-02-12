import { Button, StyleSheet, View} from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const FormButton = ({title, color, onPress, newStyles}) => {


  return (
    <View style={{...styles.formButton, ...newStyles}}>
        <Button title={title} color={color} onPress={onPress}/>
    </View>
)
}

export default FormButton

const styles = StyleSheet.create({
    formButton:{
        width:"80%",
        borderRadius:8,
        marginVertical:4,
        backgroundColor:colors.mistyRose,
        shadowColor: colors.blueGreen,
        shadowRadius: 10, 
        shadowOpacity: 0.4,
        elevation: 1,
    }
})