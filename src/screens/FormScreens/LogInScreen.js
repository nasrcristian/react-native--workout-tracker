import { View, StyleSheet, Pressable, Keyboard, Text } from "react-native";
import React from "react";
import FormTextInput from "../../components/FormTextInput";
import FormButton from "../../components/FormButton";
import colors from "../../constants/colors";
import sizes from "../../constants/sizes";
import { useFontContext } from "../../context/fonts.context";
import FormContainer from "../../components/FormContainer";
import FormHeadingText from "../../components/FormHeadingText";
import { useUserLogin } from "../../context/user.context";

const LoginScreen = ({ navigation }) => {
  /*
        Renderiza la pantalla de inicio de sesión y permite pasar a la página de home (sin validación actualmente).
    */

  const fontsLoaded = useFontContext
  const { setIsLogged } = useUserLogin()




  return (
    <FormContainer>
      <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
        <FormHeadingText text="Log In" />
        <View>
          <FormTextInput
            placeholder="E-mail"
            keyboardType="email-address"
            autoComplete="email"
            secureTextEntry={false}
            newStyles={styles.textInput}
          />
          <FormTextInput
            placeholder="Password"
            autoComplete="current-password"
            secureTextEntry={true}
            newStyles={styles.textInput}
          />
        </View>
        <View style={{ marginBottom: sizes.screenHeight / 7 }}>
          <FormButton
            title={"Log in"}
            color={colors.black}
            newStyles={styles.loginButton}
            onPress={() => setIsLogged(true)}
          />
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>Forgot password?</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.subtitleText}>New here? </Text>
            <Pressable onPress={() => navigation.navigate("Sing up")}>
              <Text
                style={{
                  ...styles.subtitleText,
                  textDecorationLine: "underline",
                }}
              >
                Create an account!
              </Text>
            </Pressable>
          </View>
        </View>
      </Pressable>
    </FormContainer>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  textInput: {
    width: "95%",
    alignSelf: "center",
    marginVertical: "2.3%",
  },
  loginButton: {
    width: sizes.screenWidth * 0.6,
    backgroundColor: colors.orangeRed,
    marginTop: 5,
    alignSelf: "center",
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
  subtitleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  subtitleText: {
    fontFamily: "OswaldRegular",
    color: colors.lightGrey,
  },
});
