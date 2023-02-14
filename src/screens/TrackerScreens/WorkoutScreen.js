import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'

const WorkoutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>WorkoutScreen</Text>
    </SafeAreaView>
  )
}

export default WorkoutScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "blue",
    alignItems:"center",
    justifyContent:"center",
  }
})