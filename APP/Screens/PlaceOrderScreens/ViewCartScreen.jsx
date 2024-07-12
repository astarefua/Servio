// ViewCartScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const ViewCartScreen = ({ route, navigation }) => {

const { cart } = route.params;

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
             // Navigate back after placing order

             
             navigation.navigate('DeliveryScreen') // Navigate back after placing order
 
            
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
    
    
    
    borderRadius:15,

    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    
    elevation: 5,

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
    backgroundColor: 'green',
    width:'100%',
    height:70,
    padding: 20,
    borderRadius: 35,
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
