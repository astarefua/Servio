// import React, { useState } from 'react';


// import {View ,Text, TextInput, TouchableOpacity, Image,  StyleSheet,}   from 'react-native';

// export default function SignUpScreen({navigation}) {
//   const currentYear = new Date().getFullYear();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   const handleSignUp = () => {
//     // Implement your sign-up logic here
//     console.log(`Signing up with email: ${email} and password: ${password}`);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign In</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           style={styles.input}
//           keyboardType="email-address"
//           autoCapitalize="none"
//         />
//         <View style={styles.passwordContainer}>
//           <TextInput
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             style={styles.passwordInput}
//             secureTextEntry={!isPasswordVisible}
//             autoCapitalize="none"
//           />
//           <TouchableOpacity
//             onPress={() => setIsPasswordVisible(!isPasswordVisible)}
//             style={styles.passwordToggle}
//           >
            
           
//             <Image
//               source={
//                 isPasswordVisible
//                   ? require('./../../../assets/Pics/showPassword.png')
//                   : require('./../../../assets/Pics/hidePassword.png')
//               }
//               style={styles.toggleIcon}
//             />
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity
//           onPress={() => console.log('Forgot password pressed')}
//           style={styles.forgotPassword}
//         >
//           <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress ={() => navigation.navigate('Phone')} style={styles.signUpButton}>
//           <Text style={styles.signUpButtonText}>Continue</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.signup}>
//         <Text style={styles.signup1}>Don't have an account?</Text>
//         <TouchableOpacity style={styles.signup_text_container} onPress ={() => navigation.navigate('Signup')}>
//           <Text style={styles.signup_text}>{" "}Sign Up</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.footer}>
//         <Text style={styles.footerText}>
//           {currentYear} <Text style={styles.footerText_servio}>Servio.</Text>{" "}
//           <Text style={styles.footerText_terms}>Terms of Service</Text>
//         </Text>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     height: 50,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//     fontSize: 18,
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     height: 50,
//     marginBottom: 15,
//     fontSize: 18,
//   },
//   passwordInput: {
//     flex: 1,
//     paddingHorizontal: 10,
//     fontSize: 18,
//   },
//   passwordToggle: {
//     padding: 10,
//   },
//   toggleIcon: {
//     width: 24,
//     height: 24,
//   },
//   forgotPassword: {
//     alignSelf: 'flex-start',
    
//   },
//   forgotPasswordText: {
//     color:'green',
//     fontSize: 18,
//   },
//   signUpButton: {
//     backgroundColor: '#28a745',
//     paddingVertical: 15,
//     marginTop:30,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   signUpButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },

//   signup: {
//     textAlign: "center",
//     flexDirection: "row",
//     justifyContent: "center",
    
//     marginTop: 80,
//   },


//   signup1: {
//     color: "#999",
//     fontSize: 17,
//   },
//   signup_text: {
//     color: "#111",
//     fontSize: 17,
//     fontWeight: "700",
//   },
//   footer: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: 10,
//     alignItems: "center",
//   },
//   footerText: {
//     fontSize: 20,
//     color: "#999",
//   },
//   footerText_servio: {
//     fontWeight: "800",
//     color: "#000",
//   },
//   footerText_terms: {
//     color: "green",
//   },
// });


// LoginScreen.js
import { useContext, useState } from "react";
import { Alert, View, Button, StyleSheet , TouchableOpacity, Text} from "react-native";
import AuthContent from "../../Auth/AuthContent";
import LoadingOverlay from "../../UI/LoadingOverlay";
import { AuthContext } from "../../Firebase/AuthContextFile";
import { login } from "../../Firebase/Auth";


function Login({ navigation }) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed! Could not log you in. Please check your email or password and try again."
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in, please wait..." />;
  }

  return (
    <View style={styles.container}>
      
    <AuthContent isLogin onAuthenticate={loginHandler} headerText="Login"/> 

      {/* <Text style={styles.forgottxt}>Forgot Password</Text> */}
      {/* <TouchableOpacity
      style={styles.forgotbtn}
        onPress={() => navigation.navigate("ForgotPassword")}
      >
       
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  
    //backgroundColor: "#f3f3f3",

    
  },

  
  
 
});

export default Login;