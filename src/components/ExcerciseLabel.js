import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import colors from '../constants/colors';
import sizes from '../constants/sizes';

const ExcerciseLabel = ({ excercise }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <Pressable style={styles.container} onPress={() => setIsSelected(true)}>
      <Image
        source={{ uri: excercise.item.image }}
        style={{ width: 75, height: 75 }}
      />
      <Text style={styles.text}> {excercise.item.title} </Text>
    </Pressable>
  );
};

export default ExcerciseLabel;

const styles = StyleSheet.create({
  container: {
    width: sizes.screenWidth * 0.95,
    borderColor: '#333',
    borderWidth: 1,
    margin: 1,
    flexDirection: 'row',
    backgroundColor: colors.orangeRed + 'aa',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'AntonRegular',
    fontSize: sizes.screenWidth * 0.05,
    textAlign: 'center',
  },
});
