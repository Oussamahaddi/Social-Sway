import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { RouteProp } from '@react-navigation/native'
import { RootStackParamListT } from '../types/Types'

type Props = {
  route : RouteProp<RootStackParamListT, 'SinglePost'>
}

const SinglePost = ({route} : Props) => {

  const post = route.params.post

  return (
    <ScrollView>
      <Image source={{uri : post.url}} style={{width: '100%', aspectRatio : 1}}/>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>{post.title}</Text>
        <Text style={styles.postDescription}>{post.photoDesc}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  postContainer : {
    width : '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  postTitle : {
    fontSize : 23,
    fontWeight : 'bold',
    marginTop : 10,
    marginBottom : 10,
  },
  postDescription : {
    fontSize : 18,
    width : '80%',
    lineHeight : 25,
    marginBottom : 20,
  },
})

export default SinglePost