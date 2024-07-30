

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

        <TouchableOpacity            onPress={() => navigation.navigate(screenName , {name})}
        >
          
            <Text style={styles.arrow}>&gt;</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.horizontalLine} />
    </View>

  );
};

const Bills = () => {
    const [searchText, setSearchText] = useState('');

  // Example data for rendering four cards
  const cardsData = [
    { id: 1, name: 'ECG', imageSource: require('./../../assets/Pics/ecg.png') , screenName:'EcgScreen'},
    { id: 2, name: 'Ghana Water', imageSource: require('./../../assets/Pics/ghWater.jpeg') , screenName:'AccountNumber'},
    { id: 3, name: 'StarTimes TV', imageSource: require('./../../assets/Pics/startimes.jpeg') , screenName:'AccountNumber'},
    { id: 4, name: 'GOtv', imageSource: require('./../../assets/Pics/gotv.png') , screenName:'AccountNumber'},
    { id: 5, name: 'DSTV', imageSource: require('./../../assets/Pics/dstv.jpeg'), screenName:'AccountNumber' },
  ];

  return (
    <View style={styles.container}>
        <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={searchText}
        onChangeText={setSearchText}
      />
      




      {cardsData.map((card) => (
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
        paddingBottom: 32,       },
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
    padding: 8,
    fontSize:30
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

export default Bills;
