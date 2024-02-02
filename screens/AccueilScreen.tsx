import { ScrollView, Pressable } from 'react-native'
import React from 'react'
import { PortfolioT, RootStackParamListT } from '../types/Types';
import { DATA } from '../data/usersData';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PortfolioComponent from '../components/PortfolioComponent';

interface Props {
  navigation : NativeStackNavigationProp<RootStackParamListT>
}

const AccueilScreen : React.FC<Props> = ({navigation}) => {

  const data : PortfolioT[] = DATA

  return (
    <ScrollView>
      {
        data.map((portfolio, index) => (
          <Pressable key={index} onPress={() => navigation.navigate('Profile', {portfolio})}>
            <PortfolioComponent portfolio={portfolio} />
          </Pressable>
        ))
      }
    </ScrollView>
  )
}

export default AccueilScreen