import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const BillsFav = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.circle}>
          <Image source={require('./../../assets/Pics/dstv.jpeg')} style={[styles.image,styles.image1]} />
          <Image source={require('./../../assets/Pics/startimes.jpeg')} style={[styles.image,styles.image2]} />
          <Image source={require('./../../assets/Pics/gotv.png')} style={[styles.image,styles.image3]} />
          <Image source={require('./../../assets/Pics/tap.jpeg')} style={[styles.image,styles.image4]} />
          <Image source={require('./../../assets/Pics/light.jpeg')} style={[styles.image,styles.image5]} />
        </View>
      </View>
      <Text style={styles.text}>
        Pay all your bills in one convinient
      </Text>
      <Text style={styles.text}>
        place:
      </Text>
      <Text style={styles.text1}>
        Pay bills, track spending , and save
      </Text>
      <Text style={styles.text1}>
        favorite accounts in one place.
      </Text>
      
      
      <TouchableOpacity style={styles.button}>
      <AntDesign name="pluscircleo" size={24} color="black" /> 
        <Text style={styles.buttonText}>New Bill</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  container: {
    backgroundColor: '#d3d3d3',
    borderRadius: 60,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  circle: {
    width: 250,
    height: 250,
    position: 'relative',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: 'absolute',
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
    fontWeight:'bold'
  },
  text1: {
    fontSize: 16,
    marginBottom: 5,
  },
  // button: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: 'green',
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   borderRadius: 8,
  //   marginTop:20,
  //   height:50,
  //   width:100
  // },



  button: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#28a745",
    borderRadius: 8,
    marginTop:20,
    width:300
  },
  
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },


  circle: {
    width: 250,
    height: 250,
    position: 'relative',
  },
  image1: {
    top: 0,
    left: '50%',
    marginLeft: -40, // half of the image width
  },
  image2: {
    top: '25%',
    left: 0,
  },
  image3: {
    bottom: 0,
    left: '50%',
    marginLeft: -100, // half of the image width
  },
  image4: {
    top: '25%',
    right: 0,
  },
  image5: {
    top: '70%',
    left: '55%',
    marginLeft: -2, // half of the image width
    marginTop: -2, 
    
     // half of the image height
  },

});

export default BillsFav;
