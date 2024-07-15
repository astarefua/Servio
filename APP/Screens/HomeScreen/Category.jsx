// import React, { useRef, useState, useEffect } from 'react';
// import { View, ScrollView, StyleSheet, Dimensions, Animated, Text, TouchableOpacity, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import FloatingButton from '../../../Components/FloatingButton';
// import client from '../../../sanity';

// const { width } = Dimensions.get('window');

// const Cat1 = () => {
//     const scrollX = useRef(new Animated.Value(0)).current;
//     const scrollViewRef = useRef(null);
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [sections, setSections] = useState([]);
//     const navigation = useNavigation();

//     useEffect(() => {
//         // Fetch data from Sanity
//         client.fetch(`
//             *[_type == "section"]{
//                 name,
//                 "cards": cards[]->{
//                     text,
//                     "imageUrl": image.asset->url,
//                     "items": items[]->{
//                         name,
//                         price,
//                         rating,
//                         reviews
//                     }
//                 }
//             }
//         `).then(data => {
//             setSections(data);
//         }).catch(console.error);
//     }, []);

//     const onScroll = Animated.event(
//         [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//         { useNativeDriver: false }
//     );

//     const onMomentumScrollEnd = (event) => {
//         const newIndex = Math.floor(event.nativeEvent.contentOffset.x / width);
//         setActiveIndex(newIndex);
//     };

//     const handleTabPress = (index) => {
//         scrollViewRef.current.scrollTo({ x: index * width, animated: true });
//         setActiveIndex(index);
//     };

//     const handleCardPress = (card) => {
//         navigation.navigate('Order1', {
//             items: card.items,
//             name: card.text
//         });
//     };

//     const renderCards = (sectionIndex) => {
//         const activeSection = sections[activeIndex];

//         if (!activeSection || !activeSection.cards) {
//             return null;
//         }

//         return activeSection.cards.map((card, index) => (
//             <TouchableOpacity key={index} style={styles.smallCard} onPress={() => handleCardPress(card)}>
//                 <Image
//                     source={{ uri: card.imageUrl }}
//                     style={styles.cardImage}
//                 />
//                 <Text style={styles.cardText}>{card.text}</Text>
//             </TouchableOpacity>
//         ));
//     };

//     return (
//         <View style={styles.container}>
//             <View>
//                 <Text style={{ color: 'gray', marginLeft: 10 }}>Your delivery location is set to </Text>
//                 <Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 10 }}>Kumasi-Accra</Text>
//             </View>
//             <View style={styles.tabContainer}>
//                 {sections.map((section, index) => (
//                     <TouchableOpacity key={index} onPress={() => handleTabPress(index)} style={styles.tab}>
//                         <Text style={styles.tabText}>{section.name}</Text>
//                         {activeIndex === index && <View style={styles.activeTabIndicator} />}
//                     </TouchableOpacity>
//                 ))}
//             </View>
//             <ScrollView
//                 ref={scrollViewRef}
//                 horizontal
//                 pagingEnabled
//                 onScroll={onScroll}
//                 onMomentumScrollEnd={onMomentumScrollEnd}
//                 scrollEventThrottle={16}
//                 showsHorizontalScrollIndicator={false}
//             >
//                 {sections.map((_, index) => (
//                     <View key={index} style={styles.section}>
//                         <View style={styles.cardContainer}>
//                             {renderCards(index)}
//                         </View>
//                     </View>
//                 ))}
//             </ScrollView>

//             <FloatingButton />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         borderTopLeftRadius: 25,
//         borderTopRightRadius: 25,
//     },
//     tabContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         borderBottomWidth: 1,
//         borderBottomColor: '#ddd',
//     },
//     tab: {
//         flex: 1,
//         alignItems: 'center',
//         paddingVertical: 10,
//     },
//     tabText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     activeTabIndicator: {
//         marginTop: 5,
//         height: 2,
//         backgroundColor: 'green',
//         width: '100%',
//     },
//     section: {
//         width,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     cardContainer: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//     },
//     smallCard: {
//         width: width / 3 - 20, // Adjust to fit 3 cards per row
//         height: 100,
//         justifyContent: 'center',
//         alignItems: 'center',
//         margin: 10,
//         borderRadius: 10,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.4,
//         shadowRadius: 1,
//     },
//     cardImage: {
//         width: 60,
//         height: 60,
//         borderRadius: 50,
//         marginBottom: 5,
//     },
//     cardText: {
//         fontSize: 14,
//         textAlign: 'center',
//     },
// });

// export default Cat1;








import React, { useRef, useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Animated, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import client from '../../../sanity';
import FloatingButton from '../../../Components/FloatingButton';
 

const { width } = Dimensions.get('window');

const Category = () => {
    const scrollX = useRef(new Animated.Value(0)).current;
    const scrollViewRef = useRef(null);
    const [sections, setSections] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const navigation = useNavigation();


    useEffect(() => {
        // Fetch data from Sanity
        const fetchSections = async () => {
            try {
                const response = await client.fetch(`*[_type == "section"]{
                     _id,
                    name,
                    cards[]->{"imageUrl": image.asset->url, "relatedImageUrl": relatedImage.asset->url, text, items[]->{ _id,name, price, rating, reviews}}

                    // cards[]->{"imageUrl": image.asset->url, text, items[]->{ _id,name, price, rating, reviews}}
                }`);
                setSections(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchSections();
    }, []);

    
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
        navigation.navigate('CategoryOrderScreen', {
            items: card.items,
            name: card.text,
            //imageUrl: card.imageUrl,
            relatedImageUrl: card.relatedImageUrl, // Pass relatedImageUrl to the next screen


        });
    };

    const renderCards = (sectionIndex) => {
        const activeSection = sections[sectionIndex];

        return activeSection.cards.map((card, index) => (
            <TouchableOpacity key={index} style={styles.smallCard} onPress={() => handleCardPress(card)}>
                <Image
                    source={{ uri: card.imageUrl }}
                    // source={{ uri: card.image.asset.url }}  Update with your Sanity image URL
                    style={styles.cardImage}
                />
                <Text style={styles.cardText}>{card.text}</Text>
            </TouchableOpacity>
        ));
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={{ color: 'gray', marginLeft: 10 , marginTop:20}}>Your delivery location is set to </Text>
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
            <FloatingButton/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor:'white',
        
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
        width: 90,
        height: 70,
        // borderRadius: 50,
        marginBottom: 5,
    },
    cardText: {
        fontSize: 14,
        textAlign: 'center',
    },
});

export default Category;



