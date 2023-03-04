import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import colors from '../constants/colors';
import InitialScreen from '../screens/FormScreens/InitialScreen';
import LogInScreen from '../screens/FormScreens/LogInScreen';
import SingUpScreen from '../screens/FormScreens/SingUpScreen';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{
        headerTransparent: true,
        title: '',
        headerTintColor: colors.mistyRose,
      }}
    >
      <Stack.Screen
        component={InitialScreen}
        name="Initial"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen component={LogInScreen} name="Log in" />
      <Stack.Screen component={SingUpScreen} name="Sing up" />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
