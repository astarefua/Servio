



import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TextInput, Button, Alert, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const DeliveryDetailsScreen = () => {
  const [deliveryData, setDeliveryData] = useState(null);
  const [destination, setDestination] = useState('');
  const [loading, setLoading] = useState(false);

  const KNUST = {
    latitude: 6.6743,
    longitude: -1.5718,
    address: 'Kwame Nkrumah University of Science and Technology, Kumasi, Ghana',
  };

  useEffect(() => {
    const requestPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }
    };

    requestPermissions();
  }, []);

  const estimateDeliveryTime = (origin, destination) => {
    const distance = getDistanceFromLatLonInKm(origin.latitude, origin.longitude, destination.latitude, destination.longitude);
    const speed = 50; // Assume an average speed of 50 km/h
    const time = distance / speed;
    return `${Math.round(time * 60)} mins`; // Convert hours to minutes
  };

  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const fetchDeliveryData = async (destinationAddress) => {
    setLoading(true);
    try {
      let destinationCoords = await Location.geocodeAsync(destinationAddress);
      if (destinationCoords.length > 0) {
        const destinationLocation = {
          latitude: destinationCoords[0].latitude,
          longitude: destinationCoords[0].longitude,
          address: destinationAddress,
        };
        const estimatedTime = estimateDeliveryTime(KNUST, destinationLocation);
        setDeliveryData({
          origin: KNUST,
          destination: destinationLocation,
          estimatedTime: estimatedTime,
        });
      }
    } catch (error) {
      console.error('Error fetching delivery data:', error);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {deliveryData ? (
          <>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: (deliveryData.origin.latitude + deliveryData.destination.latitude) / 2,
                longitude: (deliveryData.origin.longitude + deliveryData.destination.longitude) / 2,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}
            >
              <Marker
                coordinate={deliveryData.origin}
                title="Delivery Origin"
                description={deliveryData.origin.address}
              />
              <Marker
                coordinate={deliveryData.destination}
                title="Delivery Destination"
                description={deliveryData.destination.address}
              />
            </MapView>
            <View style={styles.detailsContainer}>
              <Text style={styles.text1}>Origin: {deliveryData.origin.address}</Text>
              <Text style={styles.text2}>Destination: {deliveryData.destination.address}</Text>
              <Text style={styles.text3}>Estimated Delivery Time: {deliveryData.estimatedTime}</Text>
            </View>
          </>
        ) : (
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter delivery address"
              value={destination}
              onChangeText={setDestination}
            />

            <TouchableOpacity 
               onPress={() => fetchDeliveryData(destination)}
               style={{backgroundColor:'green', height:50, paddingLeft:70, paddingTop:10, borderRadius:5}}
               >
              <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>
                Set Delivery Location
              </Text>
            </TouchableOpacity>
            {/* <Button
              
              title="Set Delivery Location"
           
            /> */}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    // borderTopLeftRadius:50,
    // borderTopRightRadius:50
  },
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 3,
  },
  detailsContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    
  },
  text1: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight:'bold'
  },
  text2: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight:'bold'
  },
  text3: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight:'bold'
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.4,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor:'white',
    borderRadius:5

  },
});

export default DeliveryDetailsScreen;
