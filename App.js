import { FontContextProvider } from './src/context/fonts.context';
import { NavigationContainer } from '@react-navigation/native';
import LoginNavigator from './src/navigation/LoginNavigator';
import TrackerNavigator from './src/navigation/TrackerNavigator';
import { useState } from 'react';

export default function App() {

  const [isLogged, setIsLogged] = useState(false)

  return(
    <FontContextProvider>
      <NavigationContainer>
        {
        !isLogged?( // Chequea si el usuario no está logeado, en cuyo caso renderea el stack de pantallas de Log In.
          <LoginNavigator/>
        ):(
          <TrackerNavigator/> // Si está logeado, renderea el stack de pantallas del tracker de entrenamientos.
        )
        }
      </NavigationContainer>
    </FontContextProvider>
  )
}