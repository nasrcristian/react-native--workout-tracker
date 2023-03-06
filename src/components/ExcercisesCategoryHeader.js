import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import colors from '../constants/colors';
import sizes from '../constants/sizes';

const ExcercisesCategoryHeader = ({ section }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> {section.title} </Text>
    </View>
  );
};

export default ExcercisesCategoryHeader;

const styles = StyleSheet.create({
  container: {
    width: sizes.windowWidth,
    borderColor: colors.black,
    // backgroundColor: '#7D1538',
    height: 'auto',
    shadowColor: colors.blueGreen,
    shadowOpacity: 0.4,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 2,
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: 'AntonRegular',
  },
});
