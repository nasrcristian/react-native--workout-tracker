import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import colors from '../constants/colors';
import ProfileScreen from '../screens/TrackerScreens/ProfileScreen';
import HistoryScreen from '../screens/TrackerScreens/HistoryScreen';
import WorkoutScreen from '../screens/TrackerScreens/WorkoutScreen';
import ExcercisesScreen from '../screens/TrackerScreens/ExcercisesScreen';
import sizes from '../constants/sizes';

const Tab = createBottomTabNavigator();

const RenderIcon = ({ focused, icon }) => {
  return (
    <View>
      <MaterialCommunityIcons
        color={focused ? colors.red : colors.redPurple}
        name={icon}
        size={25}
      />
    </View>
  );
};

const RenderLabel = ({ focused, label }) => {
  return (
    <Text
      style={{
        fontFamily: 'AntonRegular',
        color: focused ? colors.red : colors.redPurple,
        fontSize: 12.5,
      }}
    >
      {label}
    </Text>
  );
};

const TrackerNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Excercises"
      screenOptions={{
        tabBarStyle: styles.tabBar,
        headerShown: false,
      }}
    >
      <Tab.Screen
        component={ProfileScreen}
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <RenderIcon focused={focused} icon="account" />
          ),
          tabBarLabel: ({ focused }) => (
            <RenderLabel focused={focused} label="Profile" />
          ),
        }}
      />
      <Tab.Screen
        component={HistoryScreen}
        name="History"
        options={{
          tabBarIcon: ({ focused }) => (
            <RenderIcon focused={focused} icon="calendar-text" />
          ),
          tabBarLabel: ({ focused }) => (
            <RenderLabel focused={focused} label="History" />
          ),
        }}
      />
      <Tab.Screen
        component={WorkoutScreen}
        name="New Workout"
        options={{
          tabBarIcon: ({ focused }) => (
            <RenderIcon focused={focused} icon="plus" />
          ),
          tabBarLabel: ({ focused }) => (
            <RenderLabel focused={focused} label="New Workout" />
          ),
        }}
      />
      <Tab.Screen
        component={ExcercisesScreen}
        name="Excercises"
        options={{
          tabBarIcon: ({ focused }) => (
            <RenderIcon focused={focused} icon="dumbbell" />
          ),
          tabBarLabel: ({ focused }) => (
            <RenderLabel focused={focused} label="Excercises" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TrackerNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.mistyRose,
    borderTopColor: colors.lightGrey,
    borderTopWidth: 2,
    shadowColor: colors.lightGrey,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
});
