




import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import * as SMS from 'expo-sms';

const PhoneVerification = ({ navigation, route }) => {
  const { phoneNumber } = route.params;
  const [verificationCode, setVerificationCode] = useState('');

  const handleSendSMS = async () => {
    try {
      // Assuming you have a function to generate the verification code
      const generatedCode = generateVerificationCode(); // Implement this function as needed

      const { result } = await SMS.sendSMSAsync(
        [phoneNumber], // Array of phone numbers to send SMS to
        `Your verification code for MyApp is: ${generatedCode}`
      );

      if (result === SMS.SentStatus.Sent) {
        Alert.alert('SMS Sent', 'Verification code sent successfully!');
        setVerificationCode(generatedCode); // For testing purposes, set the code automatically
      } else {
        Alert.alert('Error', 'Failed to send SMS. Please try again.');
      }
    } catch (error) {
      console.error('Error sending SMS:', error);
      Alert.alert('Error', 'Failed to send SMS. Please try again.');
    }
  };

  const handleVerify = () => {
    // Implement your verification logic here
    console.log(`Verifying phone number: ${phoneNumber} with code: ${verificationCode}`);

    // Assuming verification is successful, navigate to HomeScreen
    navigation.navigate('HomeScreen');
  };

  // Function to generate a random 6-digit code for testing
  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Generate a random 6-digit number
  };

  // Render each digit input box in a row
  const renderCodeInputs = () => {
    const codeInputs = [];

    for (let i = 0; i < 6; i++) {
      codeInputs.push(
        <TextInput
          key={i}
          style={styles.codeInput}
          value={verificationCode[i] || ''}
          onChangeText={(text) => handleCodeChange(text, i)}
          maxLength={1}
          keyboardType="numeric"
          autoFocus={i === 0 ? true : false} // Focus on the first input initially
        />
      );
    }

    return (
      <View style={styles.codeInputContainer}>
        {codeInputs.map((input, index) => (
          <View key={index}>{input}</View>
        ))}
      </View>
    );
  };

  // Handle change in each digit input
  const handleCodeChange = (text, index) => {
    const newCode = [...verificationCode];
    newCode[index] = text;
    setVerificationCode(newCode.join(''));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Phone Number</Text>
      {/* <Text style={styles.description}>Enter the verification code sent to {phoneNumber}</Text> */}
      {renderCodeInputs()}
      <TouchableOpacity onPress={handleSendSMS} style={styles.sendSMSButton}>
        <Text style={styles.sendSMSButtonText}>Send SMS</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleVerify} style={styles.verifyButton}>
        <Text style={styles.verifyButtonText}>Verify</Text>
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
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  codeInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  codeInput: {
    width: 40,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 20,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  sendSMSButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 120,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 60,
  },
  sendSMSButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  verifyButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 135,
    borderRadius: 5,
     marginTop: 20,
    alignItems: 'center',
  },
  verifyButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PhoneVerification;
