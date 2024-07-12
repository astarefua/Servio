// // MealListScreen.js
// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, TouchableOpacity, StyleSheet, Button } from 'react-native';


// const MealListScreen = ({ navigation }) => {
//   const [meals, setMeals] = useState([]);

//   useEffect(() => {
//     sanityClient.fetch('*[_type == "meal"]').then((data) => setMeals(data));
//   }, []);
  

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={meals}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.card}
//             onPress={() => navigation.navigate('MealDetail', { meal: item })}
//           >
//             <Text>{item.name}</Text>
//             <Text>{item.restaurant}</Text>
//             <Text>{item.rating} stars</Text>
//             <Text>Delivery Time: {item.deliveryTime}</Text>
//             <Text>Cost: ${item.cost}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   card: {
//     padding: 20,
//     marginVertical: 10,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     elevation: 5,
//   },
// });

// export default MealListScreen;
