import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Bank = ({ route, navigation }) => {
  const { name } = route.params;

  React.useLayoutEffect(() => {
    navigation.setOptions({ title: name });
  }, [navigation, name]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account Number</Text>
      <TextInput style={styles.input} placeholder="Enter Account Number" />
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

export default Bank;
