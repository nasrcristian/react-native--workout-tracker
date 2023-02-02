import { StyleSheet, Text, SafeAreaView } from 'react-native'
import React, { useContext } from 'react'
import LoginTextInput from '../components/LoginTextInput'
import colors from '../constants/colors'
import sizes from '../constants/sizes'
import { FontContext } from '../context/fonts.context'

const SingUpScreen = () => {

  const fontsLoaded = useContext(FontContext)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Sing Up</Text>
    </SafeAreaView>
  )
}

export default SingUpScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.purple + "88"
  },
  header:{
    fontSize: (sizes.screenWidth / 6),
    fontFamily: "OswaldRegular"
  }
})