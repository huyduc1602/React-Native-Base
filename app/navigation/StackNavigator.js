import React from "react";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import * as ScreenTypes from '../../app/navigation/ScreenTypes';
import i18n from '../../app/utils/i18n';
import * as StringNames from '../../app/assets/locales/StringNames';
import DrawerNavigation from "./DrawerNavigation";
import Home from "../screens/Home";
import About from "../screens/Settings";
import LoginScreen from "../screens/Login";

const StackComponent = createStackNavigator();

const StackNavigator = (props) => {

  return (
    <>
      <StackComponent.Navigator
        initialRouteName={ScreenTypes.Login}
        detachInactiveScreens={true}
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerTitleAlign: 'center'
        }}
      >
        <StackComponent.Screen
          name={ScreenTypes.Login}
          component={LoginScreen}
          options={{
            headerShown: true,
            title: i18n.t(StringNames.tLogin),
          }}
        />
        <StackComponent.Screen
          name={ScreenTypes.Home}
          component={DrawerNavigation}
          options={{
            title: i18n.t(StringNames.tHome),
          }}
        />
        {/* <StackComponent.Screen name={"Home"} component={Home} /> */}
        {/* <StackComponent.Screen name={"About"} component={About} /> */}

      </StackComponent.Navigator>
    </>
  );
};
export default StackNavigator;
