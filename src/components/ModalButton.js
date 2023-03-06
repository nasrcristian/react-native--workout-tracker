import { Text, Pressable } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const ModalButton = ({
  title,
  onPress,
  containerStyle,
  textStyle,
  icon,
  iconColor,
  iconName,
  iconSize,
}) => {
  return (
    <Pressable style={containerStyle} onPress={onPress}>
      {icon ? (
        <MaterialCommunityIcons
          color={iconColor}
          name={iconName}
          size={iconSize}
        />
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </Pressable>
  );
};

export default ModalButton;
