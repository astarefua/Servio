




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
        backgroundColor: "#28a745",
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



