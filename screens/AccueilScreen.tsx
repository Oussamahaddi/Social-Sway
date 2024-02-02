import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { PortfolioT } from '../types/Types';
import { DATA } from '../data/usersData';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export default function AccueilScreen({navigation} : {navigation: NavigationProp<ReactNavigation.RootParamList>}) {

  const data : PortfolioT[] = DATA

  return (
    <ScrollView>
      {
        data.map((portfolio, index) => (
          <Pressable key={index} onPress={() => navigation.navigate('Profile', {portfolio})}>
            <View style={styles.postContainer}>
              <Image style={styles.img} source={{uri : portfolio.img}}/>
              <View style={styles.postInfo}>
                <Text>{portfolio.country}</Text>
                <Text>{portfolio.photos.length}</Text>
              </View>
            </View>
          </Pressable>
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