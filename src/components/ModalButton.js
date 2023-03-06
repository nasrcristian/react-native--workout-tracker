import { Text, Pressable } from 'react-native';
import React from 'react';

const ModalButton = ({ title, onPress, containerStyle, textStyle }) => {
  return (
    <Pressable style={containerStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};

export default ModalButton;
