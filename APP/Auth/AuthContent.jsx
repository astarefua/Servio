import { useState } from "react";
import { Alert, StyleSheet, View , Text} from "react-native";
import { useNavigation } from "@react-navigation/native";



import FlatButton from "../UI/FlatButton";
import AuthForm from "./AuthForm";
import { Colors } from "../UI/Styles";


function AuthContent({ isLogin, onAuthenticate , headerText}) {
  const navigation = useNavigation();
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.replace("Signup");
    } else {
      navigation.replace("Login");
    }
  }

  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    // console.log("emailIsValid:", emailIsValid);
    // console.log("passwordIsValid:", passwordIsValid);
    // console.log("emailsAreEqual:", emailsAreEqual);
    // console.log("passwordsAreEqual:", passwordsAreEqual);

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View style={styles.authContent}>
            {headerText && <Text style={styles.headerText}>{headerText}</Text>}

       
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />

       
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login in"}
        </FlatButton>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 50,
    marginHorizontal: 32,
    //padding: 10,
    
    // borderRadius: 15,
    // backgroundColor: Colors.primary800,
    // elevation: 2,
    // shadowColor: "black",
    // shadowOffset: { width: 1, height: 1 },
    // shadowOpacity: 0.35,
    // shadowRadius: 4,
    
  },
  buttons: {
    marginTop: 15,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30, // Add space beneath the header text
    color: '#000', // Customize this as needed
  },

  });