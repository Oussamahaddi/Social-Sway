import { View, Text, TextInput, StyleSheet, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'

const FaqComponent = () => {

  const [inpValue, setInpValue] = useState('');
  const [lists, setLists] = useState<string[]>([]);

  const regex = new RegExp(/(\d|\s|_|@|\.|,)/gi);

  const updateInp = () => {
    if (!regex.test(inpValue)) {
      setLists([...lists, inpValue])
      setInpValue('');
    }
  }

  return (
    <ScrollView>
      <TextInput
        style={styles.inp}
        value={inpValue}
        placeholder='write something'
        onChangeText={setInpValue}
      />
      <Pressable
        onPress={() => updateInp()}
        style={inpValue.length > 0 && !regex.test(inpValue) ? styles.btn : styles.disabledBtn}
        disabled={inpValue.length === 0}
      >
        <Text style={{textAlign : 'center', color: 'white', fontWeight : '600'}}>VALIDER</Text>
      </Pressable>
      {
        lists.map((item, index) => (
          <Pressable key={index} onPress={() => setLists((prev) => prev.filter(itm => itm != item))} style={({pressed}) => [{
            backgroundColor : pressed ? 'red' : 'orange',
            marginBottom : 10, padding : 10, marginTop : 10
          }]}>
            <Text style={{color: 'white'}}>{item}</Text>
          </Pressable>
        ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  inp : {
    borderRadius : 5,
    borderStyle : 'solid',
    borderWidth : 1,
    borderColor : 'black',
    padding : 2
  },
  btn : {
    backgroundColor : 'orange',
    padding : 10,
  },
  disabledBtn : {
    backgroundColor : '#ccc',
    padding : 10,
  },
  item : {
    backgroundColor : 'orange', 
    marginBottom : 10, 
    padding : 10,
    marginTop : 10
  }
})

export default FaqComponent