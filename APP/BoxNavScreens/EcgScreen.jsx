import React, { useLayoutEffect, useState } from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const  EcgScreen = ({route , navigation}) => {
    const { name } = route.params;

  const [text, setText] = useState('');
  const [radioButtons, setRadioButtons] = useState([
    {
      id: '1',
      label: 'PREPAID',
      value: 'PREPAID',
      selected: true,
    },
    {
      id: '2',
      label: 'POSTPAID',
      value: 'POSTPAID',
      selected: false,
    },
  ]);


  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);



  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Select meter type</Text>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setRadioButtons}
        layout="row"
        
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter account number"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
     padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    
    marginBottom: 16,
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginTop:40,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: '100%',
    backgroundColor: '#fff',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 8,
    width: '100%',
    marginTop:300,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EcgScreen;
