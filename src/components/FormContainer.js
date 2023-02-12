import React from 'react'
import { ImageBackground, StyleSheet, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../constants/colors'
import sizes from '../constants/sizes'
import {useFontContext } from '../context/fonts.context'

const FormContainer = ({children}) => {
    const fontsLoaded = useFontContext


    return (
        <ImageBackground source={require("../../assets/gym.jpeg")} resizeMode="cover" style={{flex: 1}}>
            <SafeAreaView style={styles.container}>
                {children}
            </SafeAreaView>
        </ImageBackground>
)
}

export default FormContainer

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.redPurple + "7f",
    },
})