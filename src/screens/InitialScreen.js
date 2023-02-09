import React, { useContext } from 'react'
import { StyleSheet, Text, SafeAreaView, View, ImageBackground} from 'react-native'
import OnBoardingButton from "../components/FormButton"
import colors from "../constants/colors"
import sizes from '../constants/sizes'
import { FontContext } from '../context/fonts.context'


const InitialScreen = ({navigation}) => {

    const fontsLoaded = useContext(FontContext)

    // Render de la pantalla de onBoarding con la opción de Log In y la opción de Create an account(sin uso hasta crear una screen)

return (
    <ImageBackground source={require("../../assets/iron-man.webp")} resizeMode="cover" style={styles.image}>
        <SafeAreaView style={styles.container}>
            <View style={styles.heading}>
                <Text style={styles.headingText}>Welcome to JUGGERNAUT</Text>
                <Text style={styles.subtitleText}>A tool to track your steps in the journey to strength</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <OnBoardingButton title="Create an account" color={colors.blueGreen} onPress={()=> navigation.navigate("Sing up")}/>
                <OnBoardingButton title="Log in" color={colors.blueGreen} onPress={()=> navigation.navigate("Log in")} newStyles={{backgroundColor: colors.orangeRed}}/>
            </View>
        </SafeAreaView>
    </ImageBackground>
)
}

export default InitialScreen



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
        fontSize: sizes.screenWidth / 6.8,
        color: colors.white,
        opacity:0.8,
        textAlign:"center",
        fontFamily: "AntonRegular"
    },
    subtitleText:{
        fontSize: sizes.screenWidth / 25,
        color: colors.white,
        opacity:0.5,
        textAlign:"center",
        shadowColor: colors.black,
        shadowOffset:{
            width:0, height:4
        },
        shadowRadius: 1, 
        shadowOpacity: 1,
        fontFamily: "AntonRegular"
    },
    image:{
        flex:1,
    },
    buttonsContainer:{
        flex:1,
        justifyContent:"flex-end",
        marginBottom: "20%",
        width:sizes.screenWidth,
        alignItems:"center"
    }
})