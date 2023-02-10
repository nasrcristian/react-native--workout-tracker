import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  Pressable,
  Keyboard,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import colors from "../../constants/colors";
import sizes from "../../constants/sizes";
import { FontContext } from "../../context/fonts.context";
import FormContainer from "../../components/FormContainer";
import FormHeadingText from "../../components/FormHeadingText";
import FormTextInput from "../../components/FormTextInput";
import FormButton from "../../components/FormButton";

const SingUpScreen = ({navigation}) => {
  const fontsLoaded = useContext(FontContext);

  return (
    <FormContainer>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Pressable
            onPress={() => Keyboard.dismiss()}
          >
            <FormHeadingText text="Sing Up" />
            <FormTextInput
              placeholder="Username"
              autoComplete="username"
              secureTextEntry={false}
              newStyles={styles.textInput}
            />
            <FormTextInput
              placeholder="E-mail"
              keyboardType="email-address"
              autoComplete="email"
              secureTextEntry={false}
              newStyles={styles.textInput}
            />
            <FormTextInput
              placeholder="Password"
              autoComplete="new-password"
              secureTextEntry={true}
              newStyles={styles.textInput}
            />
            <FormTextInput
              placeholder="Confirm password"
              autoComplete="off"
              secureTextEntry={true}
              newStyles={styles.textInput}
            />
            <FormButton
              title={"Sing Up"}
              color={colors.black}
              newStyles={styles.singUpButton}
              onPress={()=> navigation.navigate("Log in")}
            />
            <View style={{flexDirection: "row", justifyContent: "flex-end", width: "99%"}}>
              <Text style={styles.subtitleText}>
                By singing up you agree to our{" "} 
              </Text>
              <Text style={{...styles.subtitleText, color: colors.lightBlue, textDecorationLine: "underline"}}>
                Privacy Policy.
              </Text>
            </View>
          </Pressable>
        </KeyboardAvoidingView>
      </ScrollView>
    </FormContainer>
  );
};

export default SingUpScreen;

const styles = StyleSheet.create({
  textInput: {
    width: "99%",
    marginVertical: "3%",
  },
  singUpButton: {
    width: "99%",
    backgroundColor: colors.orangeRed,
    marginTop: 5,
    alignSelf: "center",
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
  subtitleText:{
    fontSize: sizes.screenWidth / 25,
    color: colors.white,
    opacity:0.8,
    fontFamily: "OswaldRegular"
  },
});
