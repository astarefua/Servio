import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-input';

const Phone = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');

  const handleSignIn = () => {
    // Implement your sign-in logic here
    console.log(`Signing in with phone number: ${phoneNumber}`);
    navigation.navigate('PhoneVerification', { phoneNumber });

    // Example navigation to another screen
    // navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Phone Number</Text>
      
      {/* Phone Input with Country Flags */}
      <PhoneInput
        initialCountry="us"
        onChangePhoneNumber={(number, countryCode) => {
          setPhoneNumber(number);
          setCountryCode(countryCode);
        }}
        style={styles.phoneInput}
      />
      
      {/* Continue Button */}
      <TouchableOpacity onPress={handleSignIn} style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  phoneInput: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 5,
    alignItems: 'center',
  },
  signInButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Phone;
