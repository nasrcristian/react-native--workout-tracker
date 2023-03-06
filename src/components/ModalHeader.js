import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import sizes from '../constants/sizes';

import ModalButton from './ModalButton';

const ModalHeader = ({ title, hideModal }) => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <ModalButton
        icon
        containerStyle={styles.modalButtonContainer}
        iconColor={'white'}
        iconName={'close'}
        iconSize={sizes.screenWidth / 20}
        onPress={hideModal}
      />
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <ModalButton
        containerStyle={styles.modalButtonContainer}
        textStyle={styles.modalButtonEditText}
        title="Edit"
        onPress={() => console.log('Edit')}
      />
    </SafeAreaView>
  );
};

export default ModalHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10%',
    marginHorizontal: 5,
  },
  modalButtonContainer: {
    backgroundColor: '#555',
    borderRadius: 10,
    width: '15%',
    height: sizes.screenHeight * 0.03,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButtonEditText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'OswaldRegular',
  },
  headerText: {
    color: 'white',
    fontFamily: 'AntonRegular',
    fontSize: 20,
    textAlign: 'center',
  },
  headerTextContainer: {
    maxWidth: '80%',
  },
});
