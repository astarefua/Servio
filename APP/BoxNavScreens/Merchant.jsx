import React from 'react';
import { View, Text, TextInput,  TouchableOpacity, Image, StyleSheet } from 'react-native';

const Merchant = ({ route, navigation }) => {
  const { name, image } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: name });
  }, [navigation, name]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Group 3 Screen</Text>
      <Image source={image} style={styles.image} />
      <TextInput style={styles.input} placeholder="Enter text" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Next</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:5
  },

  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#28a745",
    borderRadius: 8,
    marginTop:330
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default Merchant;
