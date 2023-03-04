import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import sizes from '../constants/sizes';
import colors from '../constants/colors';

const FormHeadingText = ({ text }) => {
  return <Text style={styles.heading}>{text}</Text>;
};

export default FormHeadingText;

const styles = StyleSheet.create({
  heading: {
    fontSize: sizes.screenWidth / 6,
    marginBottom: '5%',
    textDecorationLine: 'underline',
    fontFamily: 'AntonRegular',
    marginLeft: '5%',
    color: colors.mistyRose,
  },
});
