import { View, Text , SafeAreaView , ScrollView , StyleSheet} from 'react-native'


import React from 'react'
import SearchBar from './SearchBar'
import SlidingCards from './SlidingCards'
import Boxes from './Boxes'
import Categories from './Categories'
import ServicesScreen from './ServicesScreen'
import ReviewsScreen from './ReviewsScreen'
import FloatingButton from '../../../Components/FloatingButton'
import Category from './Category'


export default function HomeScreen() {
  

    

  return (
    <SafeAreaView style={styles.safeC}>
        <ScrollView>
            <SearchBar/>
            <SlidingCards/>
            <Boxes/>
            

            <Category/>
            
            <ServicesScreen/>
            <ReviewsScreen/>
            
            
    
        
      

        </ScrollView>
        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeC: {
        flex:1,
        
        
    }
})


