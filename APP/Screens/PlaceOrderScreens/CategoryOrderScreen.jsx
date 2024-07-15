













import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image, StatusBar } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const CategoryOrderScreen = ({ navigation }) => {
    const route = useRoute();
    // const { items, name, imageUrl , rating} = route.params;
    const { items, name, relatedImageUrl , rating} = route.params;


    const [cart, setCart] = useState({});

    useEffect(() => {
        navigation.setOptions({
            headerTransparent: true,
            headerTitle: '',
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <AntDesign name="arrowleft" size={30} color="white" style={{margin:5}}/>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const addItemToCart = (item) => {
        setCart((prevCart) => {
            const count = prevCart[item._id] ? prevCart[item._id].count + 1 : 1;
            return {
                ...prevCart,
                [item._id]: { ...item, count },
            };
        });
    };

    const removeItemFromCart = (item) => {
        setCart((prevCart) => {
            if (prevCart[item._id] && prevCart[item._id].count > 1) {
                return {
                    ...prevCart,
                    [item._id]: { ...item, count: prevCart[item._id].count - 1 },
                };
            } else {
                const { [item._id]: _, ...newCart } = prevCart;
                return newCart;
            }
        });
    };

    const getTotalCount = () => {
        return Object.values(cart).reduce((total, item) => total + item.count, 0);
    };

    const getTotalPrice = () => {
        return Object.values(cart).reduce((total, item) => total + item.count * item.price, 0);
    };

    const renderHeader = () => (
        <View>
            <StatusBar backgroundColor="transparent" translucent />
            <Image source={{ uri: relatedImageUrl }} style={styles.topImage} />

            {/* <Image source={{ uri: imageUrl }} style={styles.topImage} /> */}
            {/* <Text style={styles.title}>{name}</Text> */}
        </View>
    );

    const renderFooter = () => (
        <View style={styles.cartContainer}>
            <Text style={styles.cartText1}>{getTotalCount()}</Text>
            <TouchableOpacity style={styles.cartButton}>
                <Text
                    style={styles.cartButtonText}
                    onPress={() => navigation.navigate('CartViewCartScreen', { cart })}
                >
                    View Cart
                </Text>
            </TouchableOpacity>
            <Text style={styles.cartText2}>${getTotalPrice().toFixed(2)}</Text>
        </View>
    );


    const renderStars = (rating) => {
        const stars = [];
        const floorRating = Math.floor(rating);
        for (let i = 0; i < 5; i++) {
            if (i < floorRating) {
                stars.push(<FontAwesome key={i} name="star-o" size={18} color="gold" />);
            } else {
                stars.push(<FontAwesome key={i} name="star-o" size={18} color="gray" />);
            }
        }
        return stars;
    };


    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                keyExtractor={(item) => item._id}
                ListHeaderComponent={renderHeader}
                renderItem={({ item }) => (
                    <View key={item._id} style={styles.itemContainer}>
                        <View style={styles.itemNameAndPrice}>
                            <Text style={styles.itemText}>{item.name}</Text>
                            <Text style={styles.itemPrice}>${item.price}</Text>
                            <View style={styles.starContainer}>
                                {renderStars(item.rating)}
                            </View>

                            <Text style={styles.itemPrice}>{item.reviews}</Text>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => addItemToCart(item)}
                            >
                                <AntDesign name="pluscircleo" size={24} color="green" />
                            </TouchableOpacity>
                            <Text style={styles.itemCount}>
                                {cart[item._id] ? cart[item._id].count : 0}
                            </Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => removeItemFromCart(item)}
                            >
                                <AntDesign name="minuscircleo" size={24} color="green" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                contentContainerStyle={{ paddingBottom: 100 }} // Ensure the content does not get cut off
            />
            {renderFooter()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        
        
    },
    topImage: {
        width: '100%',
        height: 300, // Increase the height to cover the status bar and header
        resizeMode: 'cover',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40
    },
    backButton: {
        
        // Adjust to place the button within the image
        backgroundColor:'black',
        borderRadius:50,
        height:40,
        width:40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        backgroundColor: 'white',
        textAlign: 'center',
        paddingVertical: 10,
    },
    itemContainer: {
        flex: 1,
        margin: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        borderWidth: 0.3,
        borderColor: '#DAEFFD',
        
    },
    itemNameAndPrice: {
        display: 'flex',
        flexDirection: 'column',
    },
    itemText: {
        fontSize: 18,
    },
    itemPrice: {
        fontSize: 16,
        color: 'gray',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        width: 35,
        height: 35,
        borderRadius: 10,
        marginHorizontal: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemCount: {
        fontSize: 18,
    },
    cartContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'green',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    cartText1: {
        fontSize: 19,
        height: 33,
        width: 30,
        borderRadius: 20,
        backgroundColor: 'white',
        marginLeft: 10,
        right: 10,
        paddingLeft: 10,
        paddingTop: 5,
    },
    cartText2: {
        color: 'white',
        fontSize: 18,
    },
    cartButton: {
        backgroundColor: 'green',
        padding: 3,
        borderRadius: 5,
        marginTop: 3,
    },
    cartButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    starContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

});

export default CategoryOrderScreen;
