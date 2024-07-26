import { View, Text, TextInput, StyleSheet } from "react-native";



import { Colors } from "../UI/Styles";

function Input({
  placeholder,

  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      {/* <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text> */}
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize={false}
        placeholder={placeholder}

        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  // inputContainer: {
  //   //width: '150%', // Ensures input fills the width of its container
  //   paddingHorizontal: 20, // Adds space on left and right sides
  //   //marginBottom: 25,
  // },

  

      input: {
            borderWidth: 0.8,
            borderRadius: 10,
            borderColor: "#999",
            height: 50,
            width: 310,
            marginBottom: 25,
            fontSize: 20,
            paddingLeft: 10,
            
          },





  
  label: {
    color: "green",
    marginBottom: 10,
    fontSize: 15,
  },
  labelInvalid: {
    color: Colors.error500,
  },
    inputInvalid: {
    backgroundColor: Colors.error100,
  },
});