import { View, Text , SafeAreaView , ScrollView , StyleSheet} from 'react-native'


import React from 'react'
import SearchBar from './SearchBar'
import SlidingCards from './SlidingCards'
import Boxes from './Boxes'
import Categories from './Categories'

import ServicesScreen1 from './ServicesScreen1'
import ReviewsScreen from './ReviewsScreen'
import FloatingButton from '../../../Components/FloatingButton'
import Category from './Category'
import OrderScreen from '../PlaceOrderScreens/OrderScreen'


export default function HomeScreen() {
  

    

  return (
    <SafeAreaView style={styles.safeC}>
        <ScrollView>
            <SearchBar/>
            <SlidingCards/>
            <Boxes/>
            

            <Category/>
            
            {/* <ServicesScreen/> */}

            <ServicesScreen1/>
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


