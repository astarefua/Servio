import { View, StyleSheet , Text, Button, TouchableOpacity} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function History() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="calendar-clock-outline" size={355} color="gray" />
      <Text style={styles.para}>No history yet</Text>
      <Text style={styles.para}>No history yet</Text>
      <Text style={styles.para}>No history yet</Text>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>New Bill</Text></TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 20,
    marginLeft:30,
    width:300
  },
  container:{
    display:'flex',
    justifyContent:'center',
    alignContent:'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  para:{
    fontSize:20,
    marginLeft:40
 
    
  }
  
 
})