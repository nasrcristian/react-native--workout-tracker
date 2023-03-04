import { View, StyleSheet, Pressable, Keyboard, Text } from 'react-native';
import React from 'react';

import FormTextInput from '../../components/FormTextInput';
import FormButton from '../../components/FormButton';
import colors from '../../constants/colors';
import sizes from '../../constants/sizes';
import FormContainer from '../../components/FormContainer';
import FormHeadingText from '../../components/FormHeadingText';
import { useUserLogin } from '../../context/user.context';

const LoginScreen = ({ navigation }) => {
  /*
        Renderiza la pantalla de inicio de sesión y permite pasar a la página de home (sin validación actualmente).
    */
  const { setIsLogged } = useUserLogin();

  return (
    <FormContainer>
      <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
        <FormHeadingText text="Log In" />
        <View>
          <FormTextInput
            autoComplete="email"
            keyboardType="email-address"
            newStyles={styles.textInput}
            placeholder="E-mail"
            secureTextEntry={false}
          />
          <FormTextInput
            newStyles={styles.textInput}
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>
        <View style={{ marginBottom: sizes.screenHeight / 7 }}>
          <FormButton
            color={colors.black}
            newStyles={styles.loginButton}
            title={'Log in'}
            onPress={() => setIsLogged(true)}
          />
        </View>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitleText}>Forgot password?</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.subtitleText}>New here? </Text>
            <Pressable onPress={() => navigation.navigate('Sing up')}>
              <Text
                style={{
                  ...styles.subtitleText,
                  textDecorationLine: 'underline',
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
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  textInput: {
    alignSelf: 'center',
    marginVertical: '2.3%',
  },
  loginButton: {
    width: sizes.screenWidth * 0.6,
    backgroundColor: colors.orangeRed,
    marginTop: 5,
    alignSelf: 'center',
    shadowRadius: 5,
    shadowOffset: {
      width: 1,
      height: 2,
    },
  },
  subtitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  subtitleText: {
    fontFamily: 'OswaldRegular',
    color: colors.lightGrey,
  },
});
