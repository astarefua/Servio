import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons/MaterialIcons'; // Adjust import path if using react-native-vector-icons
import { useNavigation } from '@react-navigation/native'; // Import for navigation

const Boxes2 = () => {
  const navigation = useNavigation(); // Get navigation object

  const handleCardPress = (screenName) => {
    navigation.navigate(screenName);
  };

  const cardData = [
    { icon: 'home', text: 'Send Mon...', screen: 'Boxes' }, // Add screen names for navigation
    { icon: '', text: 'Airtime', screen: 'Boxes' }, // Update with missing icon and screen name
    { icon: 'public', text: 'Internet D...', screen: 'Boxes' }, // Add screen names for navigation
    { icon: 'money', text: 'Utility Bills', screen: 'Boxes' }, // Add screen names for navigation
    { icon: 'sms', text: 'SMS&Mo...', screen: 'Boxes' }, // Add screen names for navigation
    { icon: '', text: 'Convert', screen: 'Boxes' }, // Update with missing icon and screen name
  ];

  return (
    <View>
      <View>
        <Text>Our offers are good</Text>
      </View>

      <View style={styles.container}>
        <View style={styles.rows}>
          {cardData.map((card) => (
            <TouchableOpacity key={card.text} onPress={() => handleCardPress(card.screen)}>
              <View style={styles.box}>
                {card.icon && <MaterialIcons name={card.icon} size={30} color="black" />}
                <Text>{card.text}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.aiImageContainer}>
        <Image source={require('./../../../assets/Pics/AI.jpg')} style={styles.aiImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

    container:{
      backgroundColor:'#f5f5f5',
      height:330,
      gap:30,
      paddingTop:15,
      paddingBottom:15,
      paddingLeft:10,
      paddingRight:10
  
    },
    rows:{
      display:'flex',
      flexDirection:'row',
      gap:30
    },
  
    box:{
      width:90,
      height: 90,
      borderRadius:8,
      backgroundColor:'white',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      
      
      
  
    },

    aiImage:{
        height:120,
        width:180,
        
    },
    aiImageContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:-70,
        

    }



  
  })
  
  
  

export default Boxes2;

