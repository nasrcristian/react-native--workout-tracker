import {SafeAreaView, StyleSheet, Text,} from "react-native";
import React from "react";
import LoginTextInput from "../components/LoginTextInput";
import LoginButton from "../components/LoginButton";
import colors from "../constants/colors";
import sizes from "../constants/sizes";

const LoginScreen = ({handleUserStatus, primaryFont}) => {
    /*
        Renderiza la pantalla de inicio de sesión y permite pasar a la página de home (sin validación actualmente).
    */

    return (
        <SafeAreaView style={styles.loginScreenContainer}>
            <Text style={{...styles.heading, fontFamily:primaryFont}}>Log In</Text>
            <LoginTextInput placeholder="E-mail" keyboardType="email-address" autoComplete="email" secureTextEntry={false}/>
            <LoginTextInput placeholder="Password" autoComplete="current-password" secureTextEntry={true}/>
            <LoginButton title={"Log in"} color={"color"} onPress={handleUserStatus} newStyles={styles.loginButton}/>
        </SafeAreaView>
    );
};

export default LoginScreen;


const styles = StyleSheet.create({
    loginScreenContainer:{
        flex: 1,
        backgroundColor:colors.mistyRose,
        justifyContent: "center",
    },
    heading:{
        fontSize:(sizes.screenWidth / 6),
        marginLeft:5
    },
    loginButton:{
        width:150,
        marginVertical:4,
        backgroundColor:colors.orangeRed,
        marginBottom:(sizes.screenHeight / 4),
        marginLeft:5,
        shadowRadius:5,
        shadowOffset:{
            width:0, height: 2
        }
    }
});
