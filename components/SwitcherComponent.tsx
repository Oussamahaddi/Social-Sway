import { View, Text, Switch, StyleSheet } from 'react-native'
import React, { useState } from 'react'

type Props = {
  label : string

}

const SwitcherComponent = ({label} : Props) => {

  const [switcher, setSwitcher] = useState<boolean>(true)

  return (
    <View style={styles.switcher}>
      <View>
        <Text style={{fontWeight: '600', fontSize : 17}}>{label}</Text>
      </View>
      <Switch
        trackColor={{false: 'gray', true: 'orange'}}
        thumbColor={switcher ? 'white' : '#ccc'}
        onValueChange={() => setSwitcher(prev => !prev)}
        value={switcher}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  switcher : {
    flex : 1,
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})

export default SwitcherComponent