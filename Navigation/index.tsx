import {NavigationContainer, ParamListBase, RouteProp} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawNavigation from './DrawNavigation';

// import AccueilScreen from '../screens/AccueilScreen';
// import FaqScreen from '../screens/FaqScreen';
import ProfileScreen from '../screens/ProfileScreen';

import { RootStackParamListT } from '../types/Types';

const Stack = createNativeStackNavigator<RootStackParamListT>();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Accueil' screenOptions={{statusBarColor: 'black',headerTintColor : "white", headerStyle: {backgroundColor: 'orange'}}}>
        <Stack.Screen name='Accueil' component={DrawNavigation} options={{headerShown : false}} />
        <Stack.Screen 
          name='Profile' 
          component={ProfileScreen}
          options={({route} : {route : RouteProp<RootStackParamListT, "Profile">}) => ({title : `Portfolio de ${route.params.portfolio.name}`, headerShadowVisible: false})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;