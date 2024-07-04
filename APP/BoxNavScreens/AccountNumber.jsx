import React, { useLayoutEffect, useState } from 'react';

import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AccountNumber = ({route , navigation}) => {
    const { name } = route.params;

  const [inputText, setInputText] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [navigation, name]);


  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter account number"
        value={inputText}
        onChangeText={setInputText}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Next</Text>
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
    backgroundColor: '#f5f5f5',
  },
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
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
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AccountNumber;
