import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Sent = () => {
  const [inputText, setInputText] = useState('');
  const [multilineText, setMultilineText] = useState('');

  return (
    <View style={styles.screen}>
      <TextInput
        style={styles.textInput}
        placeholder="To:Type names or phone numbers"
        value={inputText}
        onChangeText={setInputText}
      />
      <TextInput
        style={styles.textArea}
        placeholder="Start typing here.."
        multiline
        numberOfLines={4}
        value={multilineText}
        onChangeText={setMultilineText}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
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
    backgroundColor: '#fff',
  },
  textArea: {
    height: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginTop:80,
    marginBottom: 80,
    paddingHorizontal: 8,
    paddingVertical: 8,
    textAlignVertical: 'top',
    backgroundColor: '#fff',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#28a745",
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Sent;
