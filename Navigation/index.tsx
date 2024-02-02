import {NavigationContainer, ParamListBase, RouteProp} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawNavigation from './DrawNavigation';

// import AccueilScreen from '../screens/AccueilScreen';
// import FaqScreen from '../screens/FaqScreen';
import ProfileScreen from '../screens/ProfileScreen';

import { RootStackParamListT } from '../types/Types';
import TabNavigation from './TabNavigation';
import SinglePost from '../screens/SinglePost';
import { Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

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