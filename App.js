import { useState } from 'react';
import { useFonts } from "expo-font"
import LoginScreen from './src/screens/LoginScreen';
import InitialScreen from './src/screens/InitialScreen';

export default function App() {
  
  const [userStatus, setUserStatus] = useState("initial") 


  const [fontsLoaded] = useFonts({
    AntonRegular: require("./assets/fonts/Anton-Regular.ttf"),
    OswaldRegular: require("./assets/fonts/Oswald-Regular.ttf")
  })

if(!fontsLoaded){
    return null
}

if(userStatus == "initial"){
  return <InitialScreen handleUserStatus={()=> setUserStatus("login")} headingFont={"AntonRegular"}/>;
}

if(userStatus == "login"){
  return <LoginScreen handleUserStatus={()=> setUserStatus("initial")} primaryFont={"OswaldRegular"}/>;
}

}
