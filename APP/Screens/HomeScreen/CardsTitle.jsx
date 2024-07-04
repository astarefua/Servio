import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'


  

export default function CardsTitle() {
  return (
    <SafeAreaView style={styles.textContainer}>
      <Text style={styles.text}>Recommended Products</Text>
    
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    textContainer: {
      alignItems: 'flex-start', // Center text horizontally
      marginBottom: 10,
      marginLeft:20 // Add some space between cards and text
    },
    text: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'left', // Center text vertically
    },
  });