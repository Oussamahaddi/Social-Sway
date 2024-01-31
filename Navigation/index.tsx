import { View, Text, Button } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import AccueilScreen from '../screens/AccueilScreen';
import FaqScreen from '../screens/FaqScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawNavigation from './DrawNavigation';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarActiveTintColor : "white", tabBarInactiveTintColor : "white", tabBarStyle : {backgroundColor :"orange"}}}>
        <Tab.Screen
          name="testone" 
          component={DrawNavigation}
          options={{
            headerShown : false,
            headerRight : () => (
              <Button onPress={() => alert("dada")} title='info' />
            )
          }}
        />
        <Tab.Screen
          name="testtwo" 
          component={FaqScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;