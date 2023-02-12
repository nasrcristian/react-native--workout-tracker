import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FontContextProvider } from './src/context/fonts.context';
import { UserContextProvider } from './src/context/user.context';
import MainNavigator from "./src/navigation/MainNavigator"

export default function App() {



  return(
    <UserContextProvider>
      <FontContextProvider>
        <NavigationContainer>
          <MainNavigator/>
        </NavigationContainer>
      </FontContextProvider>
    </UserContextProvider>
  )
}