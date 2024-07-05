import React, { useRef, useState } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Animated, Text, TouchableOpacity, Image } from 'react-native';
import FloatingButton from '../../../Components/FloatingButton';

const { width } = Dimensions.get('window');
const sections = [
    {
      name: "Popular",
      cards: [
        {image:require('./../../../assets/Pics/beanss.png'), text:"Beans"},
        {image:require('./../../../assets/Pics/jolloff.png'), text:"Jollof"},
        {image:require('./../../../assets/Pics/noodless.png'),text:"Noodles"},
        {image:require('./../../../assets/Pics/kenkeyy.png'),text:"Kenkey"},
        {image:require('./../../../assets/Pics/friess.png'),text:"Fries"},
        {image:require('./../../../assets/Pics/kokooo.png') ,text:"Koko"},
        {image:require('./../../../assets/Pics/friess.png'),text:"Fries"},
        {image:require('./../../../assets/Pics/kokoo.png') ,text:"Koko"},
      
      ]
    },
    {
      name: "Local",
      cards: [
        {image:require('./../../../assets/Pics/ff2.png'), text:"Fufu"},
        {image:require('./../../../assets/Pics/kk2.png'), text:"Konkonte"},
        {image:require('./../../../assets/Pics/bku2.png'), text:"Banku"},
        {image:require('./../../../assets/Pics/kenkeyy.png'), text:"Kenkey"},
        {image:require('./../../../assets/Pics/wakyee.png') ,text:"Waakye"},
        {image:require('./../../../assets/Pics/omoo.png') ,text:"Omo Tuo"},
        {image:require('./../../../assets/Pics/bku2.png'), text:"Banku"},
      ]
    },
    {
      name: "Groceries",
      cards: [
        {image: require('./../../../assets/Pics/alcoholl.png'), text:"Alcohol"},
        {image:require('./../../../assets/Pics/oils.jpeg'), text:"Oil"},
        {image:require('./../../../assets/Pics/toiletriess.png'),text:"Toiletries"},
        {image: require('./../../../assets/Pics/waterr.png'),text:"Water"},
        {image: require('./../../../assets/Pics/drink.png'),text:"Beverage"},
        {image: require('./../../../assets/Pics/spicess.png'),text:"Spices"},
        {image: require('./../../../assets/Pics/drink.png'),text:"Beverage"}, 
      ]
    },
];  

const Category = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const onMomentumScrollEnd = (event) => {
    const newIndex = Math.floor(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(newIndex);
  };

  const handleTabPress = (index) => {
    scrollViewRef.current.scrollTo({ x: index * width, animated: true });
    setActiveIndex(index);
  };

  const renderCards = (sectionIndex) => {
    const activeSection = sections[activeIndex];

    return activeSection.cards.map((card, index) => (
      <View key={index} style={styles.smallCard}>
        <Image
          source={card.image}
          style={styles.cardImage}
        />
        <Text style={styles.cardText}>{card.text}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={{color:'gray',marginLeft:10}}>Your delivery location is set to </Text>
        <Text style={{fontSize:22, fontWeight:'bold',marginLeft:10}}>kumasi-Accra</Text>
      </View>
      <View style={styles.tabContainer}>
        {sections.map((section, index) => (
          <TouchableOpacity key={index} onPress={() => handleTabPress(index)} style={styles.tab}>
            <Text style={styles.tabText}>{section.name}</Text>
            {activeIndex === index && <View style={styles.activeTabIndicator} />}
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        onScroll={onScroll}
        onMomentumScrollEnd={onMomentumScrollEnd}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >        
        {sections.map((_, index) => (
          <View key={index} style={styles.section}>
            <View style={styles.cardContainer}>
              {renderCards(index)}
            </View>
          </View>
        ))}
      </ScrollView>

      <FloatingButton/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    
    
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeTabIndicator: {
    marginTop: 5,
    height: 2,
    backgroundColor: 'green',
    width: '100%',
  },
  section: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  smallCard: {
    width: width/3-20, // Adjust to fit 3 cards per row
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',

    // backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius:50,
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default Category;
