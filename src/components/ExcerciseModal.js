import { StyleSheet, Modal } from 'react-native';
import React from 'react';

import { editExcercise } from '../store/actions/excercises.action';

import ModalHeader from './ModalHeader';

const ExcerciseModal = ({ excercise, setIsSelected, isSelected }) => {
  return (
    <Modal style={styles.container} transparent={false} visible={isSelected}>
      <ModalHeader
        hideModal={() => setIsSelected(false)}
        title={excercise.title}
      />
      {/* <ModalDetailsNavigator/>  dispatch.(editExcercise)*/}
    </Modal>
  );
};

export default ExcerciseModal;

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 80,
    backgroundColor: '#333',
  },
});
