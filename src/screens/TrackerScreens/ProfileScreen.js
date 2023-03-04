import { Button, StyleSheet, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useUserLogin } from '../../context/user.context';

const ProfileScreen = () => {
  const { setIsLogged } = useUserLogin();

  return (
    <SafeAreaView style={styles.container}>
      <Text>ProfileScreen</Text>
      <Button title="Log out" onPress={() => setIsLogged(false)} />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
