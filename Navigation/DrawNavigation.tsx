import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'
import AccueilScreen from '../screens/AccueilScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/Ionicons";
import FaqScreen from '../screens/FaqScreen';


const Drawer = createDrawerNavigator();

const DrawNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerTintColor : "white", headerStyle : {backgroundColor : "orange"}}}>
      <Drawer.Screen 
        name='Accueil'
        component={AccueilScreen}
        options={{
          drawerIcon : ({focused, size, color}) => (
            <Icon name="home-sharp" size={size} color={color}/>
          ),
          headerRight : () => (
            <Pressable onPress={() => alert('ddd')}>
              <Icon name='settings' color='white' size={22} style={{marginRight: 20}} />
            </Pressable>
          )
        }}
      />
      <Drawer.Screen 
        name='FAQ' 
        component={FaqScreen}
        options={{
          drawerIcon : ({focused, size, color}) => (
            <Icon name="chatbubbles" size={size} color={color}/>
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default DrawNavigation

