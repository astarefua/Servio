import { View, Text , SafeAreaView , ScrollView , StyleSheet, StatusBar} from 'react-native'


import React, { useRef } from 'react';

import SearchBar from './SearchBar'
import SlidingCards from './SlidingCards'
import Boxes from './Boxes'


import ServicesScreen1 from './ServicesScreen1'
import ReviewsScreen from './ReviewsScreen'
import ScrollToTopButton from './ScrollToTopButton';
import Category from './Category';


export default function HomeScreen() {

  const scrollViewRef = useRef(null);

  

    

  return (
    
    <SafeAreaView style={styles.safeC}>
        <ScrollView ref={scrollViewRef}>
            <SearchBar/>
            <SlidingCards/>
            <Boxes/>
            <Category/> 
            

        
            
            {/* <ServicesScreen/> */}

            <ServicesScreen1/>
            {/* <ReviewsScreen/> */}
            
            
            
           

        
      

        </ScrollView>

               <ScrollToTopButton onPress={() => scrollViewRef.current.scrollTo({ y: 0, animated: true })} />

        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safeC: { 
        flex:1,
        paddingTop: StatusBar.currentHeight,

        
    }
})


