import {  Text , StyleSheet} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function AIScreen() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>THIS IS THE AI SCREEN</Text>
    </SafeAreaView>
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