import { View, Text , SafeAreaView , ScrollView , StyleSheet} from 'react-native'


import React from 'react'
import SearchBar from './SearchBar'
import SlidingCards from './SlidingCards'
import Boxes from './Boxes'
import Categories from './Categories'


export default function HomeScreen() {


    

  return (
    <SafeAreaView style={styles.safeC}>
        <ScrollView>
            <SearchBar/>
            <SlidingCards/>
            <Boxes/>
            <Categories/>
            
    
        
      

        </ScrollView>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeC: {
        flex:1,
        
    }
})


