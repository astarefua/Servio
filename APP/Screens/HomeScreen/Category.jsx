// import React, { useRef, useState } from 'react';
// import { View, ScrollView, StyleSheet, Dimensions, Animated, Text, TouchableOpacity, Image } from 'react-native';
// import FloatingButton from '../../../Components/FloatingButton';

// const { width } = Dimensions.get('window');
// const sections = [
//     {
//       name: "Popular",
//       cards: [
//         {image:require('./../../../assets/Pics/beanss.png'), text:"Beans"},
//         {image:require('./../../../assets/Pics/jolloff.png'), text:"Jollof"},
//         {image:require('./../../../assets/Pics/noodless.png'),text:"Noodles"},
//         {image:require('./../../../assets/Pics/kenkeyy.png'),text:"Kenkey"},
//         {image:require('./../../../assets/Pics/friess.png'),text:"Fries"},
//         {image:require('./../../../assets/Pics/kokooo.png') ,text:"Koko"},
//         {image:require('./../../../assets/Pics/friess.png'),text:"Fries"},
//         {image:require('./../../../assets/Pics/kokoo.png') ,text:"Koko"},
      
//       ]
//     },
//     {
//       name: "Local",
//       cards: [
//         {image:require('./../../../assets/Pics/ff2.png'), text:"Fufu"},
//         {image:require('./../../../assets/Pics/kk2.png'), text:"Konkonte"},
//         {image:require('./../../../assets/Pics/bku2.png'), text:"Banku"},
//         {image:require('./../../../assets/Pics/kenkeyy.png'), text:"Kenkey"},
//         {image:require('./../../../assets/Pics/wakyee.png') ,text:"Waakye"},
//         {image:require('./../../../assets/Pics/omoo.png') ,text:"Omo Tuo"},
//         {image:require('./../../../assets/Pics/bku2.png'), text:"Banku"},
//       ]
//     },
//     {
//       name: "Groceries",
//       cards: [
//         {image: require('./../../../assets/Pics/alcoholl.png'), text:"Alcohol"},
//         {image:require('./../../../assets/Pics/oils.jpeg'), text:"Oil"},
//         {image:require('./../../../assets/Pics/toiletriess.png'),text:"Toiletries"},
//         {image: require('./../../../assets/Pics/waterr.png'),text:"Water"},
//         {image: require('./../../../assets/Pics/drink.png'),text:"Beverage"},
//         {image: require('./../../../assets/Pics/spicess.png'),text:"Spices"},
//         {image: require('./../../../assets/Pics/drink.png'),text:"Beverage"}, 
//       ]
//     },
// ];  

// const Category = () => {
//   const scrollX = useRef(new Animated.Value(0)).current;
//   const scrollViewRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const onScroll = Animated.event(
//     [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//     { useNativeDriver: false }
//   );

//   const onMomentumScrollEnd = (event) => {
//     const newIndex = Math.floor(event.nativeEvent.contentOffset.x / width);
//     setActiveIndex(newIndex);
//   };

//   const handleTabPress = (index) => {
//     scrollViewRef.current.scrollTo({ x: index * width, animated: true });
//     setActiveIndex(index);
//   };

//   const renderCards = (sectionIndex) => {
//     const activeSection = sections[activeIndex];

//     return activeSection.cards.map((card, index) => (
//       <View key={index} style={styles.smallCard}>
//         <Image
//           source={card.image}
//           style={styles.cardImage}
//         />
//         <Text style={styles.cardText}>{card.text}</Text>
//       </View>
//     ));
//   };

//   return (
//     <View style={styles.container}>
//       <View>
//         <Text style={{color:'gray',marginLeft:10}}>Your delivery location is set to </Text>
//         <Text style={{fontSize:22, fontWeight:'bold',marginLeft:10}}>kumasi-Accra</Text>
//       </View>
//       <View style={styles.tabContainer}>
//         {sections.map((section, index) => (
//           <TouchableOpacity key={index} onPress={() => handleTabPress(index)} style={styles.tab}>
//             <Text style={styles.tabText}>{section.name}</Text>
//             {activeIndex === index && <View style={styles.activeTabIndicator} />}
//           </TouchableOpacity>
//         ))}
//       </View>
//       <ScrollView
//         ref={scrollViewRef}
//         horizontal
//         pagingEnabled
//         onScroll={onScroll}
//         onMomentumScrollEnd={onMomentumScrollEnd}
//         scrollEventThrottle={16}
//         showsHorizontalScrollIndicator={false}
//       >        
//         {sections.map((_, index) => (
//           <View key={index} style={styles.section}>
//             <View style={styles.cardContainer}>
//               {renderCards(index)}
//             </View>
//           </View>
//         ))}
//       </ScrollView>

//       <FloatingButton/>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
    
//     borderTopLeftRadius: 25,
//     borderTopRightRadius: 25,
    
    
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   tab: {
//     flex: 1,
//     alignItems: 'center',
//     paddingVertical: 10,
//   },
//   tabText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   activeTabIndicator: {
//     marginTop: 5,
//     height: 2,
//     backgroundColor: 'green',
//     width: '100%',
//   },
//   section: {
//     width,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cardContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   },
//   smallCard: {
//     width: width/3-20, // Adjust to fit 3 cards per row
//     height: 100,
//     justifyContent: 'center',
//     alignItems: 'center',

//     // backgroundColor: '#fff',
//     margin: 10,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.4,
//     shadowRadius: 1,
    
//   },
//   cardImage: {
//     width: 60,
//     height: 60,
//     borderRadius:50,
//     marginBottom: 5,
//   },
//   cardText: {
//     fontSize: 14,
//     textAlign: 'center',
//   },
// });

// export default Category;





import React, { useRef, useState } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Animated, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FloatingButton from '../../../Components/FloatingButton';

const { width } = Dimensions.get('window');
const sections = [
    {
        name: "Popular",
        cards: [
            { image: require('./../../../assets/Pics/beanss.png'), text: "Beans", items: [{ id: 1, name: 'Small Beans', price: 5 }, { id: 2, name: 'Large Beans', price: 10 }] },
            { image: require('./../../../assets/Pics/jolloff.png'), text: "Jollof", items: [{ id: 3, name: 'Small Jollof', price: 8 }, { id: 4, name: 'Large Jollof', price: 12 }] },
            { image: require('./../../../assets/Pics/noodless.png'), text: "Noodles", items: [{ id: 5, name: 'Small Noodles', price: 6 }, { id: 6, name: 'Large Noodles', price: 11 }] },
            { image: require('./../../../assets/Pics/wakyee.png'), text: "Waakye", items: [{ id: 7, name: 'Small Waakye', price: 7 }, { id: 8, name: 'Large Waakye', price: 13 }] }
        ]
    },
    {
        name: "Local",
        cards: [
            { image: require('./../../../assets/Pics/ff2.png'), text: "Fufu", items: [{ id: 9, name: 'Small Fufu', price: 9 }, { id: 10, name: 'Large Fufu', price: 14 }] },
            { image: require('./../../../assets/Pics/kk2.png'), text: "Konkonte", items: [{ id: 11, name: 'Small Konkonte', price: 8 }, { id: 12, name: 'Large Konkonte', price: 13 }] },
            { image: require('./../../../assets/Pics/omoo.png'), text: "Omo Tuo", items: [{ id: 13, name: 'Small Omo Tuo', price: 7 }, { id: 14, name: 'Large Omo Tuo', price: 12 }] },
            { image: require('./../../../assets/Pics/kokoo.png'), text: "Koko", items: [{ id: 15, name: 'Small Koko', price: 3 }, { id: 16, name: 'Large Koko', price: 5 }] },
            { image: require('./../../../assets/Pics/ff2.png'), text: "Mpoto Mpoto", items: [{ id: 17, name: 'Small Mpoto Mpoto', price: 6 }, { id: 18, name: 'Large Mpoto Mpoto', price: 10 }] }
        ]
    },
    {
        name: "Groceries",
        cards: [
            { image: require('./../../../assets/Pics/alcoholl.png'), text: "Alcohol", items: [{ id: 19, name: 'Small Alcohol', price: 15 }, { id: 20, name: 'Large Alcohol', price: 20 }] },
            { image: require('./../../../assets/Pics/oils.jpeg'), text: "Oil", items: [{ id: 21, name: 'Small Oil', price: 6 }, { id: 22, name: 'Large Oil', price: 11 }] },
            
            { image: require('./../../../assets/Pics/drink.png'), text: "Beans", items: [{ id: 25, name: 'Small drink', price: 4 }, { id: 26, name: 'Large drink', price: 7 }] },
            { image: require('./../../../assets/Pics/Juice.png'), text: "Juice", items: [{ id: 27, name: 'Small Juice', price: 3 }, { id: 28, name: 'Large Juice', price: 5 }] },
            { image: require('./../../../assets/Pics/oils.jpeg'), text: "Salt", items: [{ id: 29, name: 'Small Salt', price: 2 }, { id: 30, name: 'Large Salt', price: 4 }] }
        ]
    }
];

const Category = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const navigation = useNavigation();

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

    const handleCardPress = (card) => {
        navigation.navigate('ImageOrderScreen', {
            items: card.items,
            name: card.text
        });
    };

    const renderCards = (sectionIndex) => {
        const activeSection = sections[activeIndex];

        return activeSection.cards.map((card, index) => (
            <TouchableOpacity key={index} style={styles.smallCard} onPress={() => handleCardPress(card)}>
                <Image
                    source={card.image}
                    style={styles.cardImage}
                />
                <Text style={styles.cardText}>{card.text}</Text>
            </TouchableOpacity>
        ));
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ color: 'gray', marginLeft: 10 }}>Your delivery location is set to </Text>
                <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 10 }}>Kumasi-Accra</Text>
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

            <FloatingButton />
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
    },
    smallCard: {
        width: width / 3 - 20, // Adjust to fit 3 cards per row
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
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
        borderRadius: 50,
        marginBottom: 5,
    },
    cardText: {
        fontSize: 14,
        textAlign: 'center',
    },
});

export default Category;
