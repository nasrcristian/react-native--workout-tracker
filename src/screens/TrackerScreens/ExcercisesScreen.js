import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import ExcerciseLabel from '../../components/ExcerciseLabel';

const ExcercisesScreen = () => {
  const excercises = useSelector((state) => state.excercises);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={excercises}
        keyExtractor={(excercise) => excercise.id}
        renderItem={(excercise) => {
          return <ExcerciseLabel excercise={excercise} />;
        }}
        style={{ flex: 1, margin: 20 }}
      />
    </SafeAreaView>
  );
};

export default ExcercisesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a3a3a3',
  },
});
