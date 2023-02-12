import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useUserLogin } from '../../context/user.context'

const ProfileScreen = () => {

  const { setIsLogged } = useUserLogin()

  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title="Log out" onPress={()=> setIsLogged(false)}/>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})