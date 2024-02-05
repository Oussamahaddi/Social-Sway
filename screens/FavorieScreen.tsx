import { View, Image, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { useAppSelector } from '../hooks'

const FavorieScreen = () => {

  const {listPortfolioLiked} = useAppSelector(state => state)
  const {height} = Dimensions.get('screen')

  return (
    <ScrollView>
      {
        listPortfolioLiked.length > 0 ? listPortfolioLiked.map((portfolio) => (
          portfolio.photos.map((pic, i) => (
            <View style={styles.constainer}>
              <Image key={i} source={{uri : pic.url}} style={styles.img}/>
              <Text style={{textAlign : 'center'}}>{pic.title}</Text>
            </View>
          ))
        ))
        : 
        <View style={{height : height,position : 'relative', top : '40%'}}>
          <Text style={{textAlign : 'center'}}>Aucun Image a affiche</Text>
        </View>
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  constainer : {
    margin : 10,
    marginBottom : 20
  },
  img : {
    width : '90%',
    height : 300,
    borderRadius : 20,
    marginRight :'auto',
    marginLeft: 'auto',
  }
})

export default FavorieScreen