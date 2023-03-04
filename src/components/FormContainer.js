import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../constants/colors';
import sizes from '../constants/sizes';

const FormContainer = ({ children }) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../assets/gym.jpeg')}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

export default FormContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.redPurple + '7f',
    paddingBottom: sizes.windowHeight / 8,
  },
});
