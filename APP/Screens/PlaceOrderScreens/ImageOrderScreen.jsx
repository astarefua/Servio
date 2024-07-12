import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

const ImageOrderScreen = ({ navigation }) => {
  const route = useRoute();
  const { items, name } = route.params;

  const [cart, setCart] = useState({});

  const addItemToCart = (item) => {
    setCart((prevCart) => {
      const count = prevCart[item.id] ? prevCart[item.id].count + 1 : 1;
      return {
        ...prevCart,
        [item.id]: { ...item, count },
      };
    });
  };

  const removeItemFromCart = (item) => {
    setCart((prevCart) => {
      if (prevCart[item.id] && prevCart[item.id].count > 1) {
        return {
          ...prevCart,
          [item.id]: { ...item, count: prevCart[item.id].count - 1 },
        };
      } else {
        const { [item.id]: _, ...newCart } = prevCart;
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View style={styles.itemNameAndPrice}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => addItemToCart(item)}
              >
                <AntDesign name="pluscircleo" size={24} color="green" />
              </TouchableOpacity>
              <Text style={styles.itemCount}>
                {cart[item.id] ? cart[item.id].count : 0}
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
      />
      <View style={styles.cartContainer}>
        <Text style={styles.cartText1}>{getTotalCount()}</Text>
        <TouchableOpacity style={styles.cartButton}>
          <Text
            style={styles.cartButtonText}
            onPress={() => navigation.navigate('ViewCartScreen', { cart })}
          >
            View Cart
          </Text>
        </TouchableOpacity>
        <Text style={styles.cartText2}>${getTotalPrice().toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
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
    padding: 15,
    borderRadius: 50,
    backgroundColor: 'green',
    alignItems: 'center',
    display: 'flex',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
    padding: 10,
  },
  cartText2: {
    color: 'white',
    fontSize: 18,
  },
  cartButton: {
    backgroundColor: 'green',
    padding: 3,
    borderRadius: 10,
    marginTop: 3,
  },
  cartButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ImageOrderScreen;
