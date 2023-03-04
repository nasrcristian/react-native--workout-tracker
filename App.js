import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useDispatch } from 'react-redux';
import { useFonts } from 'expo-font';

import { UserContextProvider } from './src/context/user.context';
import MainNavigator from './src/navigation/MainNavigator';
import getExcercises from './src/fetchData/excercises';
import store from './src/store/store';

export default function App() {
  const [fontsLoaded] = useFonts({
    AntonRegular: require('./assets/fonts/Anton-Regular.ttf'),
    OswaldRegular: require('./assets/fonts/Oswald-Regular.ttf'),
  });

  if (!fontsLoaded) return;

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   getExcercises().then((excercises) => {
  //     dispatch(initExcercises(excercises));
  //   });
  // }, []);

  return (
    <Provider store={store}>
      <UserContextProvider>
        <NavigationContainer>
          <MainNavigator />
        </NavigationContainer>
      </UserContextProvider>
    </Provider>
  );
}
