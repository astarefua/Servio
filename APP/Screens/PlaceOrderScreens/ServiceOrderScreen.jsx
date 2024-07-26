






import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { urlFor } from '../../../sanity'; // Ensure you have a function to get the image URL



const ServiceOrderScreen = ({ navigation }) => {
  const route = useRoute();
  const { items, name } = route.params;

  const [cart, setCart] = useState({});

  useEffect(() => {
    navigation.setOptions({
      headerTitle: name,
      headerTitleAlign: 'center',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, [navigation, name]);

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

  const renderFooter = () => (
    <View style={styles.cartContainer}>
      <Text style={styles.cartText1}>{getTotalCount()}</Text>
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('ViewCartScreen', { cart })}
      >
        <Text style={styles.cartButtonText}>View Cart</Text>
      </TouchableOpacity>
      <Text style={styles.cartText2}>GHS {getTotalPrice().toFixed(2)}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
                        <Image
              source={{ uri: item.image?.asset?._ref ? urlFor(item.image).url() : 'default-image-url' }}
              style={styles.image}
            />

            <View style={styles.itemNameAndPrice}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemPrice}>GHS {item.price}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => addItemToCart(item)}>
                <AntDesign name="pluscircleo" size={24} color="#28a745" />
              </TouchableOpacity>
              <Text style={styles.itemCount}>{cart[item._id] ? cart[item._id].count : 0}</Text>
              <TouchableOpacity style={styles.button} onPress={() => removeItemFromCart(item)}>
                <AntDesign name="minuscircleo" size={24} color="#28a745" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.flatListContent}
      />
      {renderFooter()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,

    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    padding: 15,
    height: 90,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    borderRadius: 5,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 0.3,
    borderColor: '#DAEFFD',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  itemNameAndPrice: {
    flex: 1,
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
    borderRadius: 25,
    marginHorizontal: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemCount: {
    fontSize: 18,
  },
  cartContainer: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#28a745",
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
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    marginLeft: 10,
    right: 10,
    paddingLeft: 15,
    paddingTop: 7,
  },
  cartText2: {
    color: 'white',
    fontSize: 18,
  },
  cartButton: {
    backgroundColor: "#28a745",
    padding: 3,
    borderRadius: 10,
    marginTop: 3,
  },
  cartButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  flatListContent: {
    flexGrow: 1,
    paddingBottom: 80, // Add space for the fixed footer
  },
});

export default ServiceOrderScreen;

