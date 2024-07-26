import { Pressable, StyleSheet, Text, View } from "react-native";

import { Colors } from "./Styles";

function Button({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
         backgroundColor: "#28a745",
        borderRadius: 10,
        height: 45,
         marginTop: 20,
         fontSize: 20,
         paddingLeft: 10,
        alignItems: "center",
        justifyContent: "center",
      },


      buttonText: {
             color: "#fff",
            fontSize: 25,
            fontWeight: "600",
          },


  // button: {
  //   borderRadius: 20,
  //   paddingVertical: 6,
  //   paddingHorizontal: 15,
  //   backgroundColor: Colors.primary500,
  //   elevation: 2,
  //   shadowColor: "black",
  //   shadowOffset: { width: 1, height: 1 },
  //   shadowOpacity: 0.25,
  //   shadowRadius: 4,
  // },
  pressed: {
    opacity: 0.7,
  },
  // buttonText: {
  //   textAlign: "center",
  //   color: "black",
  //   fontSize: 25,
  //   fontWeight: "bold",
  //   textTransform: "uppercase",
  // },
});