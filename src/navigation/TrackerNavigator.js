import { View, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import colors from "../constants/colors";

import ProfileScreen from "../screens/TrackerScreens/ProfileScreen";
import HistoryScreen from "../screens/TrackerScreens/HistoryScreen";
import WorkoutScreen from "../screens/TrackerScreens/WorkoutScreen";
import ExcercisesScreen from "../screens/TrackerScreens/ExcercisesScreen";
import { useFontContext } from "../context/fonts.context";

const Tab = createBottomTabNavigator();
const fontsLoaded = useFontContext


const RenderIcon = ({focused, icon}) =>{
  return(
    <View>
      <MaterialCommunityIcons name={icon} size={25} color={focused? colors.red : colors.redPurple}/> 
    </View>
  )
}

const RenderLabel = ({focused, label}) =>{
  return(
    <Text style={{fontFamily:"AntonRegular", color: focused? colors.red: colors.redPurple, fontSize:12.5}}>{label}</Text>
  )
}

const TrackerNavigator = () => {
  return (
    <Tab.Navigator 
      initialRouteName="New Workout"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
      >
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <RenderIcon focused={focused} icon="account"/>
          ),
          tabBarLabel: ({focused})=>(
            <RenderLabel focused={focused} label="Profile"/>
          )
        }}/>
      <Tab.Screen 
        name="History" 
        component={HistoryScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <RenderIcon focused={focused} icon="calendar-text"/>
          ),
          tabBarLabel: ({focused})=>(
            <RenderLabel focused={focused} label="History"/>
          )
        }}
        />
      <Tab.Screen 
        name="New Workout" 
        component={WorkoutScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <RenderIcon focused={focused} icon="plus"/>
          ),
          tabBarLabel: ({focused})=>(
            <RenderLabel focused={focused} label="New Workout"/>
          )
        }} 
        />
      <Tab.Screen 
        name="Excercises" 
        component={ExcercisesScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <RenderIcon focused={focused} icon="dumbbell"/>
          ),
          tabBarLabel: ({focused})=>(
            <RenderLabel focused={focused} label="Excercises"/>
          )
        }}
        />
    </Tab.Navigator>
  );
};

export default TrackerNavigator;

const styles = StyleSheet.create({
  tabBar:{
    backgroundColor: colors.lightGrey + "55",
    shadowColor: colors.orangeRed,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 5,
  }
})
