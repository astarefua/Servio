
import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const FloatingButton = () => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('AIScreen')} style={styles.button}>
      <MaterialCommunityIcons name="robot-excited-outline" size={28} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: "#28a745",
    justifyContent: 'center',
    alignItems: 'center',
    
    bottom:1,
    right: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});

export default FloatingButton;










