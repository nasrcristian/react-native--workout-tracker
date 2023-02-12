import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FontContextProvider } from './src/context/fonts.context';
import {UserContextProvider, useUserLogin } from './src/context/user.context';
import LoginNavigator from "./src/navigation/LoginNavigator"

export default function App() {

const { isLogged } = useUserLogin


  return(
    <UserContextProvider>
      <FontContextProvider>
        <NavigationContainer>
          <LoginNavigator/>
        </NavigationContainer>
      </FontContextProvider>
    </UserContextProvider>
  )
}