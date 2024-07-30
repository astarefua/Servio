import React, { useState, useRef } from 'react';
import { View, FlatList, StyleSheet, Dimensions, Image , Text} from 'react-native';


const data = [
  { id: '1', title: 'Pizza', content: 'GHS100.00', image: require('./../../../assets/Pics/pizzaff.png') },
  { id: '2', title: 'Cookies', content: 'GHS150.00', image: require('./../../../assets/Pics/cookiesF.png') },
  { id: '3', title: 'Cake', content: 'GHS190.00', image: require('./../../../assets/Pics/cakeF.png') }, 
  
];

const screenWidth = Dimensions.get('window').width;

const SlidingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0); 
   const FlatListRef = useRef(null);  

const colors = ['#fff', '#fff', '#fff', '#fff', '#fff','#fff'];

   const renderItem = ({ item, index }) => {
    const backgroundColor = colors[index % colors.length]; 
    

    return (
      <View style={[styles.card, {backgroundColor}]}>

<Image source={item.image} style={styles.cardImage} />
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardContent}>{item.content}</Text>
        </View>

      
        
        
      </View>
    );
  };

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newActiveIndex = Math.round(contentOffsetX / screenWidth);
    setActiveIndex(newActiveIndex);
  };

  return (
    <>
     
     <Text style={styles.title}>Promos</Text>
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.contentContainer}
        snapToInterval={screenWidth}
        ref={FlatListRef}
        onScroll={handleScroll}
        

      />
    </View>

    </>
     );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:10,
    paddingLeft:15,
    paddingTop:10
  },
  card: {
    width: screenWidth * 0.9,
    height: 210,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth:0.3,
    borderColor:'#DAEFFD',
 
    margin: 10,
    paddingTop:15,
    display:'flex',
    flexDirection:'column',

    justifyContent:'center',
    alignItems:'center',

    
     // Arrange elements horizontally
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    
    shadowColor: 'gray',
    borderColor:'white',
    borderWidth:5
    
  },
  cardTextContainer: {
    flex: 1, // Take up available space
    padding: 10,
    flexDirection:'row'
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding:10
  },
  cardContent: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
   color:'red'
  },
  cardImage: {
  
    height: 120,
    width:120,
      
    
    
  
  },
   contentContainer: {
    paddingHorizontal: 10,
  },
});

export default SlidingCards;
