import React, { useState, useRef } from 'react';
import { View, FlatList, StyleSheet, Dimensions, Image , Text} from 'react-native';
import CardsTitle from './CardsTitle';

const data = [
  { id: '1', title: 'Card 1', content: '$10.00', image: require('./../../../assets/Pics/pizzaff.png') }, // Replace with your image path
  { id: '2', title: 'Card 2', content: '$10.00', image: require('./../../../assets/Pics/pizzaff.png') },
  { id: '3', title: 'Card 3', content: '$10.00', image: require('./../../../assets/Pics/pizzaff.png') }, // Replace with your image path
  { id: '4', title: 'Card 4', content: '$10.00', image: require('./../../../assets/Pics/pizzaff.png') }, // Replace with your image path
  { id: '5', title: 'Card 5', content: '$10.00', image: require('./../../../assets/Pics/pizzaff.png') }, // Replace with your image path
  { id: '6', title: 'Card 6', content: '$10.00', image: require('./../../../assets/Pics/pizzaff.png') }, // Replace with your image path
  // Replace with your image path
  // ... Add more card data objects here
];

const screenWidth = Dimensions.get('window').width;

const SlidingCards = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the index of the focused card
   const FlatListRef = useRef(null);  //Reference to the FlatList component

//    const getItemLayout = (data, index) => {
//     const itemWidth = screenWidth * 0.5; // Width of each card
//     return { length: itemWidth, offset: itemWidth * index, index };
//   };

const colors = ['#fff', '#fff', '#fff', '#fff', '#fff','#fff'];

   const renderItem = ({ item, index }) => {
    const backgroundColor = colors[index % colors.length]; // Use modulo to cycle through colors
    // const isActive = index === activeIndex; // Check if card is in focus

    return (
      <View style={[styles.card, {backgroundColor}]}>

<Image source={item.image} style={styles.cardImage} />
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardContent}>{item.content}</Text>
        </View>

      
        
        {/* <View style={styles.dotContainer}>
          {data.map((cardData, dotIndex) => (
            <View
              key={cardData.id + dotIndex}
              style={[styles.dot, isActive && dotIndex === index ? styles.dotActive : '']}
            />
          ))}
        </View> */}
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
     
     <Text style={styles.title}>Recommended products</Text>
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
        onScroll={handleScroll} // Update activeIndex on scroll
        // getItemLayout={getItemLayout} Added getItemLayout prop

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
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 10,
    paddingTop:15,
    display:'flex',
    flexDirection:'column',

    justifyContent:'center',
    alignItems:'center',

    
     // Arrange elements horizontally
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    overflow:'hidden'
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
    // width: screenWidth * 0.4, // Adjust image width as needed
    height: 120,
    width:120,
      
    
    
    // resizeMode: 'contain', Stretch image to fit container
  },
   contentContainer: {
    paddingHorizontal: 10,
  },
});

export default SlidingCards;
