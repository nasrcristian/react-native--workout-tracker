import React from 'react';
import { StyleSheet, SectionList, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import ExcerciseLabel from '../../components/ExcerciseLabel';
import ExcercisesCategoryHeader from '../../components/ExcercisesCategoryHeader';
import colors from '../../constants/colors';

const ExcercisesScreen = () => {
  const excercises = useSelector((state) => state.excercises);

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        contentContainerStyle={{ alignItems: 'flex-start' }}
        keyExtractor={(item) => {
          return item.id.toString();
        }}
        renderItem={({ item }) => {
          return <ExcerciseLabel excercise={item} />;
        }}
        renderSectionHeader={({ section }) => (
          <ExcercisesCategoryHeader section={section} />
        )}
        sections={excercises.map((item) => {
          return {
            key: item.category,
            title: item.category,
            data: item.excercises,
          };
        })}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
};

export default ExcercisesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.salmon,
  },
});
