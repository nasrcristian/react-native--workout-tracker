import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import colors from '../constants/colors';
import sizes from '../constants/sizes';

const ExcercisesCategoryHeader = ({ section }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> {section.title} </Text>
    </SafeAreaView>
  );
};

export default ExcercisesCategoryHeader;

const styles = StyleSheet.create({
  container: {
    width: sizes.windowWidth,
    borderColor: colors.black,
    shadowColor: colors.blueGreen,
    shadowOpacity: 0.4,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 2,
  },
  text: {
    fontSize: 25,
    fontFamily: 'AntonRegular',
  },
});
