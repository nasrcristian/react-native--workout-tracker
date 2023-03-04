import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

const WorkoutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>WorkoutScreen</Text>
    </SafeAreaView>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
