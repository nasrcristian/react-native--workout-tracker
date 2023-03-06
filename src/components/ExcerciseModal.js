import { StyleSheet, Modal, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { editExcercise } from '../store/actions/excercises.action';
import colors from '../constants/colors';
import sizes from '../constants/sizes';

import ModalHeader from './ModalHeader';

const ExcerciseModal = ({ excercise, setIsSelected, isSelected }) => {
  return (
    <Modal animationType={'fade'} transparent={true} visible={isSelected}>
      <SafeAreaView style={styles.modal}>
        <View style={styles.container}>
          <ModalHeader
            hideModal={() => setIsSelected(false)}
            title={excercise.title}
          />
          {/* <ModalDetailsNavigator/>  dispatch.(editExcercise)*/}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ExcerciseModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: colors.black + 'dd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: colors.purple,
    width: sizes.screenWidth * 0.8,
    height: sizes.screenHeight * 0.7,
  },
});
