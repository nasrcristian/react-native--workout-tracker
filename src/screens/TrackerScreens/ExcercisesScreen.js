import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React from 'react'

const ExcercisesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ExcercisesScreen</Text>
    </SafeAreaView>
  )
}

export default ExcercisesScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "crimson",
    alignItems:"center",
    justifyContent:"center",
  }
})