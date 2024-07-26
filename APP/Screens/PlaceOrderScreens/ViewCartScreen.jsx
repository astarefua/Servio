// ViewCartScreen.js

import React, { useLayoutEffect } from 'react';

import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ViewCartScreen = ({ route, navigation }) => {

const { cart } = route.params;

useLayoutEffect(() => {
  navigation.setOptions({
    headerTitle: 'View Cart',
    headerTitleAlign: 'center',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });
}, [navigation]);


  const getTotalCount = () => {
    return Object.values(cart).reduce((total, item) => total + item.count, 0);
  };
  

  const getTotalPrice = () => {
    return Object.values(cart).reduce((total, item) => total + item.count * item.price, 0);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.values(cart)}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>${item.price}</Text>
            <Text style={styles.itemText}>Quantity: {item.count}</Text>
          </View>
        )}
      />
      <View style={styles.cartSummaryContainer}>
        <View style={styles.cartSummaryTextContainer}>
        <Text style={styles.cartSummaryText}>Total Items: </Text>
        <Text>{getTotalCount()}</Text>
        </View>

        <View style={styles.cartSummaryTextContainer}>
        <Text style={styles.cartSummaryText}>Total Price: </Text>
        <Text>${getTotalPrice().toFixed(2)}</Text>

        </View>
        


        
        <TouchableOpacity
  style={styles.placeOrderButton}
  onPress={() => {
    const totalItems = getTotalCount();
    const totalPrice = getTotalPrice();

    if (totalItems <= 0 || totalPrice <= 0) {
      // Show alert message
      alert('Please add items to your cart before placing an order.');
    } else {
      // Navigate to DeliveryScreen
      navigation.navigate('DeliveryScreen');
    }
  }}
>
  <Text style={styles.placeOrderButtonText}>Place Order</Text>
</TouchableOpacity>







      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  itemContainer: {
    flex: 1,
    margin: 10,
    padding: 17,
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
    
    
    borderRadius:5,

    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    
    elevation: 3,
    borderWidth: 0.3,
    borderColor: '#DAEFFD',
    

  },
  itemText: {
    fontSize: 18,
  },
  cartSummaryContainer: {
    padding: 16,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    backgroundColor:'white',
    height:250

    
    
  },
  cartSummaryText: {
    fontSize: 18,
    
  },

  cartSummaryTextContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:20,
    marginTop:20
  },
  placeOrderButton: {
    backgroundColor: "#28a745",
    width:'100%',
    height:65,
    padding: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems:'center'
  },
  placeOrderButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight:'bold'
  },
});

export default ViewCartScreen;
