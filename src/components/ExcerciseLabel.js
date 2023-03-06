import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import colors from '../constants/colors';
import sizes from '../constants/sizes';

import ExcerciseModal from './ExcerciseModal';
const ExcerciseLabel = ({ excercise }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <View>
      <Pressable style={styles.container} onPress={() => setIsSelected(true)}>
        <Image source={{ uri: excercise.image }} style={styles.image} />
        <Text style={styles.text}> {excercise.title} </Text>
        <View />
      </Pressable>
      <ExcerciseModal
        excercise={excercise}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
    </View>
  );
};

export default ExcerciseLabel;

const styles = StyleSheet.create({
  container: {
    width: sizes.windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.lightGrey,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#EB786F',
  },
  image: {
    margin: 2,
    width: 25,
    height: 25,
  },
  text: {
    fontFamily: 'OswaldRegular',
    fontSize: sizes.screenWidth * 0.05,
    textAlign: 'center',
  },
});
