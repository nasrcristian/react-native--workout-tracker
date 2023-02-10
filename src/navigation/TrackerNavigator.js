import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProfileScreen from '../screens/TrackerScreens/ProfileScreen'
import HistoryScreen from '../screens/TrackerScreens/HistoryScreen'
import WorkoutScreen from '../screens/TrackerScreens/WorkoutScreen'
import ExcercisesScreen from '../screens/TrackerScreens/ExcercisesScreen'


const Tab = createBottomTabNavigator()

const TrackerNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="New Workout">
        <Tab.Screen name="Profile" component={ProfileScreen}/>
        <Tab.Screen name="History" component={HistoryScreen}/>
        <Tab.Screen name="New Workout" component={WorkoutScreen}/>
        <Tab.Screen name="Excercises" component={ExcercisesScreen}/>
    </Tab.Navigator>
  )
}

export default TrackerNavigator
