import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Easing, Animated, Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook


const DeliveryScreen = () => {
  const navigation = useNavigation(); // Initialize navigation hook

  
  const translateX = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, {
          toValue: 60, // Move to the right
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: -60, // Move to the left
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(translateX, {
          toValue: 0, // Move back to the center
          duration: 2000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  

  useEffect(() => {
    startAnimation();
    const timer = setTimeout(() => {
      navigation.navigate('DeliveryDetailsScreen');
    }, 6000); 

    return () => clearTimeout(timer); 
  }, []);



  const deliveryDriverImage = require('./../../../assets/Pics/deliveryboy22.png');

  return (
    <View style={styles.container}>
    
      <View style={styles.imageContainer}>
        <Animated.Image
          source={deliveryDriverImage}
          style={[styles.image, { transform: [{ translateX }] }]}
        />
        {/* </View> */}
      </View>
      <Text
        style={{
           
          marginTop: 20,
          fontSize: 20,
          fontWeight:'bold'
        }}
      >
        Servioo.... here to serve
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 350,
  },
});

export default DeliveryScreen;
