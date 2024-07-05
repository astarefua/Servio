// MainScreen.js
import React from 'react';
import { View, StyleSheet , Text} from 'react-native';
import Services from '../../../Components/Services';
import FloatingButton from '../../../Components/FloatingButton';

const ServicesScreen = () => {
  return (

    <View style={styles.container}>
         <Text style={styles.title}>Our Services</Text>
    
      <View style={styles.row}>
        <Services iconLib="Ionicons" iconName="medkit-outline" label="Pharmacy" />
        <Services iconLib=" Feather" iconName="shopping-cart" label="Local Market" />
      </View>
      <View style={styles.row}>
        <Services iconLib="Octicons" iconName="paintbrush" label="Cosmetics" />
        <Services iconLib=" Feather" iconName="shopping-bag" label="Provisions" />
      </View>
      <View style={styles.row}>
        <Services iconLib="MaterialIcons" iconName="house-siding" label="Hotels" />
        <Services iconLib="Ionicons" iconName="wine-outline" label="Wine" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },

  title:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:10,
    paddingLeft:13
  }
});

export default ServicesScreen;
