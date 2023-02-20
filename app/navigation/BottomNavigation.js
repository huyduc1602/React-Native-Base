import React from "react";
import { useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import About from "../screens/Settings";

import CustomNavigation from "./CustomNavigation";

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {

  const { colors } = useTheme();

  const theme = useTheme();

  return (
    <>
      <Tab.Navigator
        tabBar={props => <CustomNavigation {...props} />}
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Tab.Screen
          name="Home"
          component={Home}
        />
        <Tab.Screen
          name="Settings"
          component={About}
        />
      </Tab.Navigator>
    </>
  );
};



export default BottomNavigation;
