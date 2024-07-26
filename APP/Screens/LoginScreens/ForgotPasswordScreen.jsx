// ForgotPasswordScreen.js
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet , TouchableOpacity} from "react-native";


import { sendPasswordResetEmail } from "../../Firebase/Auth";

function ForgotPasswordScreen({ navigation }) {
  const [email, setEmail] = useState("");

  async function resetPasswordHandler() {
    try {
      await sendPasswordResetEmail(email);
      Alert.alert("Success", "Password reset email sent!");
      navigation.navigate("Login");
    } catch (error) {
      Alert.alert(
        "Error",
        "Could not send password reset email. Please try again."
      );
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Enter your email address:
      </Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />


      <TouchableOpacity
      style={styles.resetbtn}
      onPress={resetPasswordHandler}
      >
        <Text  style={styles.resettxt}>Reset Password</Text>
       
      </TouchableOpacity> 
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f3f3f3",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    width:"95%",
    marginLeft:10,

  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 0.6,
    marginBottom: 12,
    padding: 8,
    borderRadius: 4,
    width:"95%",
    marginLeft:10,
  },
  resetbtn:{
    backgroundColor: "#28a745",
        borderRadius: 10,
        height: 45,
        width:"95%",
        
         marginTop: 40,
         fontSize: 20,
         marginLeft:10,
        alignItems: "center",
        justifyContent: "center",
  },

  resettxt:{
    color: "#fff",
            fontSize: 20,
            fontWeight: "300",
  }


});

export default ForgotPasswordScreen;