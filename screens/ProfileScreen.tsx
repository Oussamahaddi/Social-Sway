import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { RootStackParamListT } from '../types/Types'
import { RouteProp } from '@react-navigation/native'

interface Props {
  route : RouteProp<RootStackParamListT, "Profile">
}

const ProfileScreen : React.FC<Props> = ({route}) => {

  const portfolio = route.params.portfolio;

  return (
    <ScrollView>
      <View style={styles.header}>
        <Image style={styles.img} source={{uri : portfolio.img}}/>
      </View>
      <View style={styles.bioContainer}>
        <Text style={styles.bio}>Bio</Text>
        <Text style={styles.bioDescription}>{portfolio.desc}</Text>
      </View>
      <View style={styles.photoContainer}>
        {
          portfolio.photos.map((pic, index) => (
            <View key={index}>
              <Image style={{width: '100%', aspectRatio : 1}} source={{uri : pic.url}}/>
              <Text style={styles.photoTitle}>{pic.title}</Text>
            </View>
          ))
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    height : 300,
    backgroundColor : 'orange'
  },
  img : {
    width : 200,
    aspectRatio : 1,
    borderRadius : 100,
    borderStyle : 'solid',
    borderWidth : 6,
    borderColor : 'white'
  },
  bioContainer : {
    width : '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  bio : {
    fontSize : 23,
    fontWeight : 'bold',
    marginTop : 10,
    marginBottom : 10,
  },
  bioDescription : {
    fontSize : 18,
    width : '80%',
    lineHeight : 25,
    marginBottom : 20,
  },
  photoContainer : {
    flex : 1,
    gap: 20,
  },
  photoTitle : {
    backgroundColor : 'rgba(11, 11, 11, 0.49)',
    position: 'absolute',
    width : '100%',
    bottom : 0,
    padding : 10,
    color : 'white',
    fontWeight: '600',
  }
})

export default ProfileScreen