import { TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import colors from '../constants/colors';
import sizes from '../constants/sizes';

const FormTextInput = ({
  placeholder,
  keyboardType,
  autoComplete,
  secureTextEntry,
  newStyles,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextInput
      autoComplete={autoComplete}
      autoCorrect={false}
      caretHidden={true}
      keyboardType={keyboardType}
      placeholder={placeholder}
      placeholderTextColor={
        (isFocused && colors.redPurple) || colors.redPurple + '66'
      } // En caso de que el elemento este en focus se elimina la transparencia
      secureTextEntry={secureTextEntry}
      style={[
        styles.formInput,
        { ...newStyles },
        isFocused && { borderColor: colors.redPurple },
      ]} // En caso de que el elemento este en focus se elimina la transparencia
      onBlur={() => setIsFocused(false)}
      onFocus={() => setIsFocused(true)}
    />
  );
};

export default FormTextInput;

const styles = StyleSheet.create({
  formInput: {
    backgroundColor: colors.white + 'dd',
    borderWidth: 2,
    borderColor: colors.black + '66',
    alignSelf: 'center',
    padding: 10,
    fontSize: 19,
    borderRadius: 10,
    width: sizes.screenWidth * 0.9,
    height: sizes.screenWidth * 0.12,
    // aspectRatio: '9/1',
    fontFamily: 'OswaldRegular',
  },
});
