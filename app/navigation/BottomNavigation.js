import React from 'react';
import {useTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingScreen from '../screens/SettingScreen';

import CustomNavigation from './CustomNavigation';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <>
      <Tab.Navigator
        tabBar={props => <CustomNavigation {...props} />}
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigation;
