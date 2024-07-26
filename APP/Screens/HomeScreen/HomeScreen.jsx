import { View, Text , SafeAreaView , ScrollView , StyleSheet, StatusBar} from 'react-native'


// import React, { useRef } from 'react';
import React, {useContext, useEffect, useState , useRef } from "react";

import SearchBar from './SearchBar'
import SlidingCards from './SlidingCards'
import Boxes from './Boxes'


import ServicesScreen1 from './ServicesScreen1'
import ReviewsScreen from './ReviewsScreen'
import ScrollToTopButton from './ScrollToTopButton';
import Category from './Category';

import { AuthContext } from '../../Firebase/AuthContextFile';
import axios from "axios";


export default function HomeScreen() {

  const scrollViewRef = useRef(null);

  const [fetchedMessage, setFetchedMesssage] = useState("");

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    axios
      .get(
        "https://servio-78107-default-rtdb.firebaseio.com/message.json?auth= " +
          token
      )
      .then((response) => {
        setFetchedMesssage(response.data);
      });
  }, [token]);


    

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


