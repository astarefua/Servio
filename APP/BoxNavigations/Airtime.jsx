// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Favorites from '../BoxNavScreens/Favorites';
// import Pay from '../BoxNavScreens/Pay'
// import History from '../BoxNavScreens/History'
// import HomeScreen from '../Screens/HomeScreen/HomeScreen';

// import { Text } from 'react-native';

// import { AntDesign } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
// import { SimpleLineIcons } from '@expo/vector-icons';
// import AirtimePay from '../BoxNavScreens/AirtimePay';



// const Tab = createBottomTabNavigator();

// export default function Internet() {
//   return (
//     <Tab.Navigator screenOptions={{
//         tabBarActiveTintColor:'#4CAF50',
//         headerShown:false
//     }}>
//         <Tab.Screen name='Favorites' component={Favorites}
//         options={{
//             tabBarLabel:({color})=>(
//                 <Text style={{color:color , fontSize:20, marginTop:-7}}>
//                     Favorites
//                 </Text>
//             ),

//             tabBarIcon:({color,size})=>(
//                 <AntDesign name="staro" size={size} color={color} />

//             )
//         }}/>
//         <Tab.Screen name='AirtimePay' component={AirtimePay} 
//         options={{
//             tabBarLabel:({color})=>(
//                 <Text style={{color:color , fontSize:20, marginTop:-7}}>
//                     Pay
//                 </Text>
//             ),

//             tabBarIcon:({color,size})=>(
//               <FontAwesome name="money" size={size} color={color} />

//             )
//         }}/>
//         <Tab.Screen name='History' component={History} 
//         options={{
//             tabBarLabel:({color})=>(
//                 <Text style={{color:color , fontSize:20, marginTop:-7}}>
//                     Profile
//                 </Text>
//             ),

//             tabBarIcon:({color,size})=>(
//               <SimpleLineIcons name="notebook" size={size} color={color} />

//             )
//         }} />

//     </Tab.Navigator>
    
//   )
// }




import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';


const Card = ({ name, imageSource, screenName }) => {
    const navigation = useNavigation();

  return (
    <View style={styles.cardContainer}>

        <View style={styles.card}>
        <Image source={imageSource} style={styles.image} />
        
        
        <View style={styles.centerContent}>
            <Text style={styles.name}>{name}</Text>
        </View>

        <TouchableOpacity style={styles.arrow}           onPress={() => navigation.navigate(screenName , {name})}
        >
            {/* Your arrow icon or image here */}
            <Text style={styles.arrow} >&gt;</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
    </View>

  );
};


const Airtime = () => {
    const [searchText, setSearchText] = useState('');
        const cardData =[
            { id: 1, name: 'AT Airtime', imageSource: require('./../../assets/Pics/atmoney.png') , screenName:'PhoneNumber'},
    { id: 2, name: 'Glo Airtime', imageSource: require('./../../assets/Pics/zeepay.png') , screenName:'PhoneNumber'},
    { id: 3, name: 'MTN Airtime', imageSource: require('./../../assets/Pics/mtn.png') , screenName:'PhoneNumber'},
    { id: 4, name: 'Telecel Airtime', imageSource: require('./../../assets/Pics/telecel.png') , screenName:'PhoneNumber'},


        ];




  return (
    









<View style={styles.container}>
        <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
      />
      




      {cardData.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          imageSource={card.imageSource}
          screenName={card.screenName}
          onPress={() => {
            // Handle press action if needed
            console.log('Card pressed:', card.name);
          }}
        />
      ))}

      
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        padding: 16,
        paddingBottom: 32, // Ensures space below the cards
      },
      cardContainer: {
        // marginBottom: 5,
      },
      searchBar: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 16,
      },
    
      
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    padding: 10,
    marginBottom: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
  },
  arrow: {
    fontSize: 28,
    color: '#000',
  },
  centerContent: {
    flex: 1,
    padding: 20,
    // alignItems: 'center',
  },
//   name: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },



  name: {
    flex: 1,
    fontSize: 18,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 40,
     // To make it rounded, half of the image size (assuming square image)
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 8,
  },

});

export default Airtime;
