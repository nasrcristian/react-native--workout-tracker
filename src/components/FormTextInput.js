import { Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView} from "react-native";
import React, { useState } from "react";
import colors from "../constants/colors";
import sizes from "../constants/sizes";
import { useFontContext } from "../context/fonts.context";

const FormTextInput = ({placeholder, keyboardType, autoComplete, secureTextEntry, newStyles}) => {

  const [isFocused, setIsFocused] = useState(false)

  const fontsLoaded = useFontContext

  return (
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={(isFocused && colors.redPurple) || colors.redPurple + "66"} // En caso de que el elemento este en focus se elimina la transparencia
          autoComplete={autoComplete}
          keyboardType={keyboardType}
          autoCorrect={false}
          caretHidden={true}
          secureTextEntry={secureTextEntry}
          style={[styles.formInput, {...newStyles}, isFocused && {borderColor: colors.redPurple}]} // En caso de que el elemento este en focus se elimina la transparencia
          onFocus={()=> setIsFocused(true)}
          onBlur={()=> setIsFocused(false)}
        />
  );
};

export default FormTextInput;

const styles = StyleSheet.create({
  formInput:{
    backgroundColor:colors.white + "dd",
    borderWidth:2,
    borderColor:colors.black + "66",
    alignSelf: "center",
    padding:10,
    fontSize:19,
    borderRadius: 10,
    aspectRatio:"9/1",
    fontFamily: "OswaldRegular",
}
});
