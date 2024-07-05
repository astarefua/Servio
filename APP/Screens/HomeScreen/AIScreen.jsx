import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

export default function AIScreen() {
  return (
    <View>
      <Text style={styles.title}>THIS IS THE AI SCREEN</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
})