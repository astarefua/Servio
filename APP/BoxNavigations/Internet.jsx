


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


const Internet = () => {
    const [searchText, setSearchText] = useState('');
        const cardData =[
            { id: 1, name: 'AT Data Bundle', imageSource: require('./../../assets/Pics/atmoney.png') , screenName:'InternetAccountNumber'},
    { id: 2, name: 'CloudGhana internet', imageSource: require('./../../assets/Pics/cloud.jpeg') , screenName:'InternetAccountNumber'},
    { id: 3, name: 'MTN Data Bundle', imageSource: require('./../../assets/Pics/mtn.png') , screenName:'InternetAccountNumber'},
    { id: 4, name: 'Telecel Data Bundle', imageSource: require('./../../assets/Pics/telecel.png') , screenName:'InternetAccountNumber'},


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
        paddingBottom: 32, 
      },
      cardContainer: {
        
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
    
  },



  name: {
    flex: 1,
    fontSize: 18,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 40,
    
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 8,
  },

});

export default Internet;



