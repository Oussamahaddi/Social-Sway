import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DrawNavigation from './DrawNavigation'
import FavorieScreen from '../screens/FavorieScreen'
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle : {backgroundColor : 'orange'}}}>
      <Tab.Screen 
        name='Draw'
        component={DrawNavigation}
        options={{
          title : 'Accueil',
          headerShown: false, 
          tabBarIcon : ({focused, color, size}) => (<Icon name='home' color={color} size={size} />),
          tabBarInactiveTintColor : 'white'
        }} 
      />
      <Tab.Screen 
        name='Favorie' 
        component={FavorieScreen} 
        options={{
          tabBarIcon : ({focused, color, size}) => (<Icon name='heart' color={color} size={size} />), 
          tabBarInactiveTintColor : 'white'
        }} 
      />
    </Tab.Navigator>
  )
}

export default TabNavigation