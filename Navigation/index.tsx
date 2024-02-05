import {NavigationContainer, RouteProp} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamListT } from '../types/Types';

import TabNavigation from './TabNavigation';
import ProfileScreen from '../screens/ProfileScreen';
import SinglePost from '../screens/SinglePost';
import { useAppSelector } from '../hooks';
import LikedAlert from '../components/LikedAlert';
import { DISLIKE, LIKE } from '../redux/type';
import { dislikePortolio, likePortfolio } from '../redux/action';

const Stack = createNativeStackNavigator<RootStackParamListT>();

const Navigation = () => {

  const {listPortfolioLiked} = useAppSelector((state) => state);

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
              listPortfolioLiked.includes(route.params.portfolio) ? 
              <LikedAlert title='Photos removed' description='wa2 wa2 wa2' icon='trash' dispatchMethod={dislikePortolio(route.params.portfolio)} /> :
              <LikedAlert title='Photos enregitrees' description='Elles sont disponibles dans votre selection' icon='heart' dispatchMethod={likePortfolio(route.params.portfolio)} />
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