import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createStackNavigator();

import Home from '../Home/Index';
import Page from '../Page/Index';

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="inicio"
    >
      <Screen
        name="Home"
        component={Home}
        options={{ headerShown: null }}
      />
      <Screen
        name="Page"
        component={Page}
        options={{ headerShown: null }}
      />

    </Navigator>
  )
}