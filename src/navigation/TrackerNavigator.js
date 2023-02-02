import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from "../constants/colors";

import InitialScreen from "../screens/InitialScreen";
import LogInScreen from "../screens/LogInScreen";
import SingUpScreen from "../screens/SingUpScreen";



const Stack = createNativeStackNavigator()

export default TrackerNavigator = ()=>{



    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Initial"
                screenOptions={{
                    headerTransparent: true,
                    title: "",
                    headerTintColor: "#525"
                }}>
                <Stack.Screen 
                    name="Initial" 
                    component={InitialScreen} 
                    options={{
                        headerShown: false
                }}/>
                <Stack.Screen 
                    name="Log in" 
                    component={LogInScreen}
                />
                <Stack.Screen 
                    name="Sing up" 
                    component={SingUpScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}