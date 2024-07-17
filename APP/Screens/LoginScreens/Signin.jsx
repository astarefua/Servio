import React, { useState } from 'react';
import {View ,Text, TextInput, TouchableOpacity, Image,  StyleSheet,}   from 'react-native';

export default function SignUpScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSignUp = () => {
    // Implement your sign-up logic here
    console.log(`Signing up with email: ${email} and password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            style={styles.passwordInput}
            secureTextEntry={!isPasswordVisible}
            autoCapitalize="none"
          />
          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            style={styles.passwordToggle}
          >
            
           
            <Image
              source={
                isPasswordVisible
                  ? require('./../../../assets/Pics/showPassword.png')
                  : require('./../../../assets/Pics/hidePassword.png')
              }
              style={styles.toggleIcon}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => console.log('Forgot password pressed')}
          style={styles.forgotPassword}
        >
          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress ={() => navigation.navigate('Phone')} style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 18,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 50,
    marginBottom: 15,
    fontSize: 18,
  },
  passwordInput: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  passwordToggle: {
    padding: 10,
  },
  toggleIcon: {
    width: 24,
    height: 24,
  },
  forgotPassword: {
    alignSelf: 'flex-start',
    
  },
  forgotPasswordText: {
    color:'green',
    fontSize: 18,
  },
  signUpButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    marginTop:30,
    borderRadius: 5,
    alignItems: 'center',
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});


