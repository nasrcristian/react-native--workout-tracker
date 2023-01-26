import React from 'react'
import { StyleSheet, Text, SafeAreaView, View, ImageBackground} from 'react-native'
import { useFonts } from "expo-font"
import OnBoardingButton from "../components/LoginButton"
import colors from "../constants/colors"
import sizes from '../constants/sizes'


const OnBoardingScreen = ({handleUserStatus, headingFont}) => {

    // Render de la pantalla de onBoarding con la opción de Log In y la opción de Create an account(sin uso hasta crear una screen)

return (
    <ImageBackground source={require("../../assets/iron-man.webp")} resizeMode="cover" style={styles.image}>
        <SafeAreaView style={styles.container}>
            <View style={styles.heading}>
                <Text style={{...styles.headingText, fontFamily:headingFont}}>Welcome to JUGGERNAUT</Text>
                <Text style={{...styles.subtitleText, fontFamily:headingFont}}>A tool to track your steps in the journey to strength</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <OnBoardingButton title="Create an account" color={colors.blue}/>
                <OnBoardingButton title="Log in" color={colors.blue} onPress={handleUserStatus} newStyles={{backgroundColor: colors.orangeRed}}/>
            </View>
        </SafeAreaView>
    </ImageBackground>
)
}

export default OnBoardingScreen



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.purple + "dd",
        alignItems: "center"
    },
    heading:{
        margin:20,
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    headingText:{
        fontSize: 60,
        color: colors.white,
        opacity:0.8,
        textAlign:"center"
    },
    subtitleText:{
        fontSize: 15,
        color: colors.white,
        opacity:0.5,
        textAlign:"center",
        shadowColor: colors.black,
        shadowOffset:{
            width:0, height:4
        },
        shadowRadius: 1, 
        shadowOpacity: 1,
    },
    image:{
        flex:1,
    },
    buttonsContainer:{
        flex:1,
        justifyContent:"flex-end",
        marginBottom: 90,
        width:sizes.screenWidth,
        alignItems:"center"
    }
})