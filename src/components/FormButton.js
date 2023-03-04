import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import colors from '../constants/colors';
import sizes from '../constants/sizes';

const FormButton = ({ title, onPress, newStyles }) => {
  return (
    <Pressable style={{ ...styles.formButton, ...newStyles }}>
      <Text style={styles.text} onPress={onPress}>
        {title}
      </Text>
    </Pressable>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  formButton: {
    width: '80%',
    height: '12%',
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: 4,
    backgroundColor: colors.mistyRose,
    shadowColor: colors.blueGreen,
    shadowRadius: 10,
    shadowOpacity: 0.4,
    elevation: 1,
    color: colors.blueGreen,
  },
  text: {
    fontSize: sizes.screenWidth * 0.06,
    textAlign: 'center',
  },
});
