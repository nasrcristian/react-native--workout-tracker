import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { FontContextProvider } from './src/context/fonts.context';
import LoginNavigator from './src/navigation/LoginNavigator';
import TrackerNavigator from './src/navigation/TrackerNavigator';
import { UserContext, UserContextProvider } from './src/context/user.context';


export default function App() {

const { isLogged } = useContext(UserContext)


  return(
    <UserContextProvider>
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
    </UserContextProvider>
  )
}