import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
  const navigation = useNavigation();
  const translateX = useRef(new Animated.Value(-100)).current; // Start position for the animation

  useEffect(() => {
    // Start the animation
    Animated.timing(translateX, {
      toValue: 100, // End position for the animation
      duration: 4000, // Duration of the animation
      useNativeDriver: true,
    }).start();

    // Navigate to the terms page after 4 seconds
    const timeout = setTimeout(() => {
      navigation.navigate('Signin');
    }, 4000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, [translateX, navigation]);
  
  return (
    <View style={styles.container}>
      <Animated.Image
        source={require('./../../../assets/Pics/final_icon.png')}
        style={[styles.logo, { transform: [{ translateX }] }]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
  },
});

