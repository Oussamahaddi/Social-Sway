import {NavigationContainer, RouteProp} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
import { useState } from 'react';
import { RootStackParamListT } from '../types/Types';
import Icon from 'react-native-vector-icons/Ionicons';

import TabNavigation from './TabNavigation';
import ProfileScreen from '../screens/ProfileScreen';
import SinglePost from '../screens/SinglePost';

const Stack = createNativeStackNavigator<RootStackParamListT>();

const Navigation = () => {

  const [like, setLike] = useState<boolean>(true);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{statusBarColor: 'black',headerTintColor : "white", headerStyle: {backgroundColor: 'orange'}}}>
        <Stack.Screen 
          name='Home' 
          component={TabNavigation} 
          options={{headerShown : false}} 
        />
        <Stack.Screen 
          name='Profile' 
          component={ProfileScreen}
          options={({route} : {route : RouteProp<RootStackParamListT, "Profile">}) => ({
            title : `Portfolio de ${route.params.portfolio.name}`, 
            headerShadowVisible: false, 
            headerStyle : {backgroundColor : route.params.portfolio.favColor},
            headerRight : () => (
              <Pressable onPress={() => setLike(!like)}>
                <Icon name={like ? 'heart' : 'trash'} color='white' size={26} style={{marginRight: 10}} />
              </Pressable>
            )
          })}
        />
        <Stack.Screen 
          name='SinglePost' 
          component={SinglePost}
          options={({route} : {route : RouteProp<RootStackParamListT, "SinglePost">}) => ({
            title : `${route.params.post.title}`
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;