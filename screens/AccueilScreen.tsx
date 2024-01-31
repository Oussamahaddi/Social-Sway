import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DataT } from '../types/Types';
import { DATA } from '../data/usersData';

export default function AccueilScreen() {

  const data : DataT[] = DATA

  return (
    <ScrollView>
      {
        data.map((post, index) => (
          <View key={index} style={styles.postContainer}>
            <Image style={styles.img} source={{uri : post.img}}/>
            <View style={styles.postInfo}>
              <Text>{post.country}</Text>
              <Text>{post.photos.length}</Text>
            </View>
          </View>
        ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  postContainer : {
    display : 'flex',
    flexDirection : "column",
    alignItems : "center"
  },
  img : {
    width : '90%',
    height : 350,
    borderRadius : 20,
    marginTop : 10,
    marginBottom : 10
  },
  postInfo : {
    width : "100%",
    display : "flex",
    flexDirection : "row",
    justifyContent: "space-around"
  }
})