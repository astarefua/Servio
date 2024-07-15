import React, { useRef, useState } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Animated, Text, TouchableOpacity, Image } from 'react-native';

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
        {image:require('./../../../assets/Pics/kokoo.png') ,text:"Koko"},
        {image:require('./../../../assets/Pics/friess.png'),text:"Fries"},
        {image:require('./../../../assets/Pics/kokoo.png') ,text:"Koko"},
        




        // {image:require('./../../../assets/images/beans.jpeg'), text:"Beans"},
        // {image:require('./../../../assets/images/jollof.jpeg'), text:"Jollof"},
        // {image:require('./../../../assets/images/noodles.jpeg'),text:"Noodles"},
        // {image:require('./../../../assets/images/kenkey.jpeg'),text:"Kenkey"},
        // {image:require('./../../../assets/images/fries.jpeg'),text:"Fries"},
        // {image:require('./../../../assets/images/koko.jpeg') ,text:"Koko"},
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





        // {image:require('./../../../assets/images/fufu.jpeg'), text:"Fufu"},
        // {image:require('./../../../assets/images/konkonte.jpeg'), text:"Konkonte"},
        // {image:require('./../../../assets/images/banku.jpeg'), text:"Banku"},
        // {image:require('./../../../assets/images/kenkey.jpeg'), text:"Kenkey"},
        // {image:require('./../../../assets/images/waakye.jpeg') ,text:"Waakye"},
        // {image:require('./../../../assets/images/omo.jpeg') ,text:"Omo Tuo"},

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


        // {image: require('./../../../assets/images/alcohol.jpeg'), text:"Alcohol"},
        // {image:require('./../../../assets/images/oils.jpeg'), text:"Oil"},
        // {image:require('./../../../assets/images/toiletries.jpeg'),text:"Toiletries"},
        // {image: require('./../../../assets/images/water.jpeg'),text:"Water"},
        // {image: require('./../../../assets/images/beverage.jpeg'),text:"Beverage"},
        // {image: require('./../../../assets/images/spices.jpeg'),text:"Spices"},
      ]
    },
    // {
    //   name: "Section 4",
    //   images: [
    //     require('./../../../assets/images/beans.jpeg'),
    //     require('./../../../assets/images/beans.jpeg'),
    //     require('./../../../assets/images/beans.jpeg'),
    //     require('./../../../assets/images/beans.jpeg'),
    //     require('./../../../assets/images/beans.jpeg')
    //   ]
    // }
];  

const CategoriesTry = () => {
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
    // return sections.map((section, index) => (
    //   <View key={index} style={styles.card}>
    //     <Text style={styles.cardText}>{section}</Text>
    //   </View>
    // ));
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
          {renderCards(index)}
        </View>
      ))}

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop:-15,
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    backgroundColor:'white'
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
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    width,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },

  
  cardText: {
    fontSize: 14,
    textAlign: 'center',

  },

  smallCard: {
    width: width / 3 - 20, // Adjust to fit 3 cards per row
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    backgroundColor:'white'
    
  },

  cardImage: {
    width: 60,
    height: 60,
    marginBottom: 5,
    
    
    
    
  },
  

});

export default CategoriesTry;
