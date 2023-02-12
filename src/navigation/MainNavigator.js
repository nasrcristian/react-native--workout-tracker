import { useUserLogin } from "../context/user.context";
import LoginNavigator from "./LoginNavigator";
import TrackerNavigator from "./TrackerNavigator";

export default function MainNavigator(){
    const { isLogged } = useUserLogin()

    if(!isLogged){
        return <LoginNavigator/>
    } else{
        return <TrackerNavigator/>
    }
}