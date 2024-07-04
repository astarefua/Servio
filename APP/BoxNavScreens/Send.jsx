import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const groups = [
  {
    label: 'Mobile Money',
    data: [
      { id: '1', name: 'AT Money', image: require('./../../assets/Pics/atmoney.png') },
      { id: '2', name: 'Zeepay', image: require('./../../assets/Pics/zeepay.png') },
      { id: '3', name: 'MTN Mobile Money', image: require('./../../assets/Pics/mtn.png') },
      { id: '4', name: 'Telecel Cash', image: require('./../../assets/Pics/telecel.png') },


    //   { id: '5', name: 'Telecel Cash', image: require('./../../assets/Pics/startimes.jpeg') },
    ],
  },
  {
    label: 'Bank',
    data: [
      { id: '5', name: 'ABSA Bank Ghana', image: require('./../../assets/Pics/absa.png') },
      { id: '6', name: 'GCB Bank', image: require('./../../assets/Pics/gcb.png') },
      { id: '7', name: 'Cal Bank', image: require('./../../assets/Pics/calbank.png') },
      { id: '8', name: 'Ecobank Ghana', image: require('./../../assets/Pics/ecobank.png') },
      { id: '9', name: 'Fidelity Bank Ghana', image: require('./../../assets/Pics/fidelity.jpeg') },
      { id: '10', name: 'Zenith Bank Ghana', image: require('./../../assets/Pics/zenith.png') },
    ],
  },
  {
    label: 'Merchants',
    data: [
      { id: '10', name: 'Aramex Shipments', image: require('./../../assets/Pics/aramex.jpeg') },
      { id: '11', name: 'Merchant on Servio', image: require('./../../assets/Pics/startimes.jpeg') },
      { id: '12', name: 'Gym Pass', image: require('./../../assets/Pics/gympass.png') },



    //   { id: '14', name: 'Item 14', image: require('./../../assets/Pics/startimes.jpeg') },
    //   { id: '15', name: 'Item 15', image: require('./../../assets/Pics/startimes.jpeg') },
    ],
  },
];

const Card = ({ item, group }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (group.label === 'Mobile Money') {
      navigation.navigate('MobileMoney', { name: item.name });
    } else if (group.label === 'Bank') {
      navigation.navigate('Bank', { name: item.name });
    } else if (group.label === 'Merchants') {
      navigation.navigate('Merchant', { name: item.name , image: item.image });
    }
  };

  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.arrow}>&gt;</Text>
      </TouchableOpacity>
    </View>
  );
};

const Group = ({ group }) => (
  <View style={styles.group}>
    <Text style={styles.groupLabel}>{group.label}</Text>
    {group.data.map((item) => (
      <Card key={item.id} item={item} group={group} />
    ))}
  </View>
);

const Send = () => {
  return (
    <FlatList
      data={groups}
      renderItem={({ item }) => <Group group={item} />}
      keyExtractor={(item) => item.label}
    />
  );
};

const styles = StyleSheet.create({
  group: {
    marginVertical: 10,
  },
  groupLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingLeft: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginRight: 10,
  },
  name: {
    flex: 1,
    fontSize: 18,
  },
  arrow: {
    fontSize: 28,
    color: '#000',
 
  },
});

export default Send;
