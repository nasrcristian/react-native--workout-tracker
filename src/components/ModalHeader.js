import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import ModalButton from './ModalButton';

const ModalHeader = ({ title, hideModal }) => {
  return (
    <View style={styles.headerContainer}>
      <ModalButton
        containerStyle={{ backgroundColor: '#333' }}
        textStyle={{ color: 'white' }}
        title="X"
        onPress={hideModal}
      />
      <View>
        <Text>{title}</Text>
      </View>
      <ModalButton
        containerStyle={{ backgroundColor: '#333' }}
        textStyle={{ color: 'white' }}
        title="Edit"
        onPress={() => console.log('Edit')}
      />
    </View>
  );
};

export default ModalHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
  },
});
