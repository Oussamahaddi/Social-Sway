import { ScrollView, Pressable, Text } from 'react-native'
import React from 'react'
import {  RootStackParamListT } from '../types/Types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PortfolioComponent from '../components/PortfolioComponent';
import ModalComponent from '../components/ModalComponent';
import { useAppDispatch, useAppSelector } from '../hooks';
import { hideModal, showModal } from '../redux/action';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  navigation : NativeStackNavigationProp<RootStackParamListT>
}

const AccueilScreen : React.FC<Props> = ({navigation}) => {

  const dispatch = useAppDispatch()
  const data = useAppSelector((state) => state.data)

  return (
    <ScrollView>
      {
        data.map((portfolio, index) => (
          <Pressable key={index} onPress={() => navigation.navigate('Profile', {portfolio})}>
            <PortfolioComponent portfolio={portfolio} />
          </Pressable>
        ))
      }
      <ModalComponent/>
    </ScrollView>
  )
}

export default AccueilScreen