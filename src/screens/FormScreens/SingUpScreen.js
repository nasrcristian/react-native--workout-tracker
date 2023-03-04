import React from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  Keyboard,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import colors from '../../constants/colors';
import sizes from '../../constants/sizes';
import FormContainer from '../../components/FormContainer';
import FormHeadingText from '../../components/FormHeadingText';
import FormTextInput from '../../components/FormTextInput';
import FormButton from '../../components/FormButton';

const SingUpScreen = ({ navigation }) => {
  return (
    <FormContainer>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <Pressable onPress={() => Keyboard.dismiss()}>
            <FormHeadingText text="Sing Up" />
            <FormTextInput
              autoComplete="username"
              newStyles={styles.textInput}
              placeholder="Username"
              secureTextEntry={false}
            />
            <FormTextInput
              autoComplete="email"
              keyboardType="email-address"
              newStyles={styles.textInput}
              placeholder="E-mail"
              secureTextEntry={false}
            />
            <FormTextInput
              autoComplete="off"
              newStyles={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
            />
            <FormTextInput
              autoComplete="off"
              newStyles={styles.textInput}
              placeholder="Confirm password"
              secureTextEntry={true}
            />
            <FormButton
              color={colors.black}
              newStyles={styles.singUpButton}
              title={'Sing Up'}
              onPress={() => navigation.navigate('Log in')}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                width: '99%',
              }}
            >
              <Text style={styles.subtitleText}>
                By singing up you agree to our{' '}
              </Text>
              <Text
                style={{
                  ...styles.subtitleText,
                  color: colors.lightBlue,
                  textDecorationLine: 'underline',
                }}
              >
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
    marginVertical: '3%',
  },
  singUpButton: {
    width: '90%',
    backgroundColor: colors.orangeRed,
    marginTop: 5,
    alignSelf: 'center',
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
  subtitleText: {
    fontSize: sizes.screenWidth / 25,
    color: colors.white,
    opacity: 0.8,
    fontFamily: 'OswaldRegular',
  },
});
