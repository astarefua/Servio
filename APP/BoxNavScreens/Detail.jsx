
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Detail = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>{route.params.cardName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Detail;
