// // MealDetailScreen.js
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

// const MealDetailScreen = ({ route }) => {
//   const { meal } = route.params;
//   const [count, setCount] = useState(0);
//   const [total, setTotal] = useState(0);

//   const handleAdd = () => {
//     setCount(count + 1);
//     setTotal(total + meal.cost);
//   };

//   const handleMinus = () => {
//     if (count > 0) {
//       setCount(count - 1);
//       setTotal(total - meal.cost);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.name}>{meal.name}</Text>
//       <Text>{meal.restaurant}</Text>
//       <Text>{meal.rating} stars</Text>
//       <Text>Delivery Time: {meal.deliveryTime}</Text>
//       <Text>Cost: ${meal.cost}</Text>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.roundButton} onPress={handleAdd}>
//           <Text>+</Text>
//         </TouchableOpacity>
//         {count > 0 && (
//           <TouchableOpacity style={styles.roundButton} onPress={handleMinus}>
//             <Text>-</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//       <Button title="View Cart" onPress={() => {}} />
//       <Text>Total: ${total}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   roundButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: 'lightgray',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginHorizontal: 10,
//   },
// });

// export default MealDetailScreen;
