import { StyleSheet, Text, SafeAreaView } from 'react-native';
import React from 'react';

const HistoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HistoryScreen</Text>
    </SafeAreaView>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
