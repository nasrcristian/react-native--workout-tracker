import { TextInput, StyleSheet } from "react-native";
import React from "react";
import colors from "../constants/colors";

const LoginTextInput = ({placeholder, keyboardType, autoComplete, secureTextEntry, newStyles}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={colors.black}
      autoComplete={autoComplete}
      keyboardType={keyboardType}
      autoCorrect={false}
      caretHidden={true}
      secureTextEntry={secureTextEntry}
      style={{...styles.loginInput, ...newStyles}}
    />
  );
};

export default LoginTextInput;

const styles = StyleSheet.create({
  loginInput:{
    backgroundColor:"transparent",
    borderWidth:2,
    borderColor:colors.black,
    padding:10,
    margin:5,
    fontSize:20,
    borderRadius: 10,
    width:"90%",
    aspectRatio:"9/1"
}
});
