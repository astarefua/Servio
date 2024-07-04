import React, { useState } from 'react';
import { View, Text, TextInput, Button, Switch, StyleSheet , TouchableOpacity } from 'react-native';

const InternetAccountNumber = ({ route, navigation }) => {
  const { name } = route.params;
  const [toggle, setToggle] = useState(false);

React.useLayoutEffect(() => {
     navigation.setOptions({ title: name });
   }, [navigation, name]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mobile Money Number</Text>
      <TextInput style={styles.input} placeholder="Mobile Money Number" />
      <View style={styles.toogleHori} >
      <Text style={styles.text1}>Use my number</Text>
      <View style={styles.toggleContainer}>
        {/* <Text>Option</Text> */}
        <Switch value={toggle} onValueChange={setToggle} />
      </View>
      </View>

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
    marginBottom:10
  },
  text1: {
    fontSize: 20,
    marginTop:8
  },
  input: {
    height: 40,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius:5
  },
  toggleContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // marginBottom: 10,
  },
  toogleHori:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 8,
    marginTop:330
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default InternetAccountNumber;
