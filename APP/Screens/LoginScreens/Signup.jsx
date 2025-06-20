// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
// } from "react-native";
// import { router } from "expo-router";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { useNavigation } from "@react-navigation/native";


// // 
// export default function SignUp() {
//   const currentYear = new Date().getFullYear();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [retypePassword, setRetypePassword] = useState("");
//   const [isPasswordVisible, setIsPasswordVisible] = useState("");
//   const navigation = useNavigation();


//   const handleSignUp = () => {
//     if (password !== retypePassword) {
//       alert("Passwords do not match.");
//       return;
//     }
//     alert("Sign Up Successful");
//     navigation.navigate("Phone");

//   };
  
//   return (
//     <SafeAreaView style={styles.container}>
//       <TouchableOpacity onPress ={() => navigation.navigate('Signin')}>
//         <Image
//           style={styles.backButton}
//           source={require("./../../../assets/Pics/backarrow.png")}
//         />
//       </TouchableOpacity>
//       <Text style={styles.title}>Sign Up</Text>
//       <View style={styles.signup_container}>
//         <TextInput
//           value={email}
//           onChangeText={setEmail}
//           style={styles.input}
//           placeholder="Email"
//         />

//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.password_text}
//             value={password}
//             onChangeText={setPassword}
//             placeholder="Password"
//             secureTextEntry={!isPasswordVisible}
//           />
//           <TouchableOpacity
//             onPress={() => setIsPasswordVisible(!isPasswordVisible)}
//             style={styles.icon}
//           >
            
            
//             <Image
//               source={
//                 isPasswordVisible
//                   ? require("./../../../assets/Pics/hidePassword.png")
//                   : require("./../../../assets/Pics/showPassword.png")
//               }
//               style={styles.iconImage}
//             />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.password_text}
//             placeholder="Retype Password"
//             value={retypePassword}
//             onChangeText={setRetypePassword}
//             secureTextEntry={!isPasswordVisible}
//           />
//           <TouchableOpacity
//             onPress={() => setIsPasswordVisible(!isPasswordVisible)}
//             style={styles.icon}
//           >
//             <Image
//               source={
//                 isPasswordVisible
//                   ? require("./../../../assets/Pics/hidePassword.png")
//                   : require("./../../../assets/Pics/showPassword.png")
//               }
//               style={styles.iconImage}
//             />
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity onPress={handleSignUp} style={styles.button}>
//           <Text style={styles.buttonText}>Continue</Text>
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.orText}>or sign up with</Text>
//       <TouchableOpacity style={styles.googleButton}>
//         <Image
//           source={require("./../../../assets/Pics/google.png")}
//           style={styles.googleIcon}
//         />
//         <Text style={styles.googleButtonText}>Google</Text>
//       </TouchableOpacity>
//       <Text style={styles.login}>
//         Already have an account? .
//         <TouchableOpacity onPress ={() => navigation.navigate('Signin')}>
//           <Text style={styles.login_text}>Log in</Text>
//         </TouchableOpacity>
//       </Text>
//       <View style={styles.footer}>
//         <Text style={styles.footerText}>
//           {currentYear} <Text style={styles.footerText_servio}>Servio.</Text>{" "}
//           <Text style={styles.footerText_terms}>Terms of Service</Text>
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     backgroundColor: "#fff",
//   },
//   backButton: {
//     width: 40,
//     height: 40,
//   },
//   title: {
//     fontSize: 25,
//     fontWeight: "800",
//     marginTop: 75,
//     textAlign: "center",
//   },
//   signup_container: {
//     marginTop: 60,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     borderWidth: 1,
//     borderRadius: 10,
//     borderColor: "#999",
//     height: 45,
//     marginBottom: 25,
//     fontSize: 20,
//     paddingLeft: 10,
//     justifyContent: "space-between",
//   },
//   input: {
//     borderWidth: 1,
//     borderRadius: 10,
//     borderColor: "#999",
//     height: 45,
//     marginBottom: 25,
//     fontSize: 20,
//     paddingLeft: 10,
//   },
//   password_text: {
//     fontSize: 20,
//     flex: 1,
//   },
//   icon: {
//     padding: 10,
//   },
//   iconImage: {
//     width: 24,
//     height: 24,
//   },
//   button: {
//     backgroundColor: "#28a745",
//     borderRadius: 10,
//     height: 45,
//     marginTop: 40,
//     fontSize: 20,
//     paddingLeft: 10,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 25,
//     fontWeight: "600",
//   },
//   orText: {
//     color: "#999",
//     textAlign: "center",
//     fontSize: 17,
//     marginTop: 25,
//   },
//   googleButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#ccc",
//     width: 160,
//     justifyContent: "center",
//     alignSelf: "center",
//     borderRadius: 10,
//     height: 42,
//     marginTop: 10,
//     fontSize: 20,
//     paddingLeft: 10,
//   },
//   googleIcon: {
//     width: 24,
//     height: 24,
//     marginRight: 10,
//   },
//   googleButtonText: {
//     fontSize: 18,
//     color: "#222",
//     fontWeight: "350",
//   },
//   login: {
//     textAlign: "center",
//     color: "#999",
//     fontSize: 17,
//     marginTop: 50,
//   },
//   login_text: {
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





import { useContext, useState } from "react";
import { Alert, StyleSheet , View} from "react-native";
import AuthContent from "../../Auth/AuthContent";
import LoadingOverlay from "../../UI/LoadingOverlay";
import { AuthContext } from "../../Firebase/AuthContextFile";
import { createUser } from "../../Firebase/Auth";


function Signup() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed.Could not create an account for you ,Please try again! "
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return (
      <LoadingOverlay message="Creating your account.Just few minutes..." />
    );
  }

  return (
    <View style={styles.container}>
      <AuthContent onAuthenticate={signupHandler} headerText="Sign Up" />
    </View>
  );


  // return <AuthContent onAuthenticate={signupHandler} headerText="signup" />;
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Signup;
