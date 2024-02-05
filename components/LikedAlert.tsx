import { Pressable, Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useAppDispatch } from '../hooks'
import { PortfolioT } from '../types/Types'

type Props = {
  title : string
  description : string
  icon : string
  dispatchMethod : {
    type: "LIKE" | "DISLIKE";
    payload: PortfolioT;
  }
}

const LikedAlert = ({title, description, icon, dispatchMethod} : Props) => {

  const dispatch = useAppDispatch();

  return (
    <Pressable onPress={() => {
      dispatch(dispatchMethod)
      Alert.alert(
        title, 
        description, 
        [
          {
            text: 'ok',
            style: 'cancel',
          },
        ],
      )
  }}>
    <Icon name={icon} color='white' size={26} style={{marginRight: 10}} />
  </Pressable>
  )
}

export default LikedAlert