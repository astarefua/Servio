
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome , Feather , Octicons} from '@expo/vector-icons'; // Importing multiple icon libraries
import { useNavigation } from '@react-navigation/native';



const Services = ({ iconLib, iconName, label , items}) => {

  const navigation = useNavigation();
  const [isClicked, setIsClicked] = useState(false);

  const handlePress1 = () => {
    setIsClicked(!isClicked);
  };

  const handlePress2 = () => {
    navigation.navigate('OrderScreen', { items, name: label });

  };

  const handleCombinedPress = () => {
    handlePress1();
    handlePress2();
  };

  const renderIcon = () => {
    const iconProps = {
      name: iconName,
      size: 40,
      color: isClicked ? 'white' : 'black',
    };

    switch (iconLib) {
      case ' Feather':
        return < Feather {...iconProps} />;
      case 'Ionicons':
        return <Ionicons {...iconProps} />;
      case 'MaterialIcons':
        return <MaterialIcons {...iconProps} />;
        case 'Octicons':
        return <Octicons {...iconProps} />;
      
      default:
        return <FontAwesome {...iconProps} />;
    }
  };

  return (
    <TouchableOpacity onPress={handleCombinedPress} style={[styles.card, isClicked && styles.cardClicked]}>
      <View style={styles.iconContainer}>
        {renderIcon()}
      </View>
      <Text style={[styles.label, isClicked && styles.labelClicked]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    height:200
  },
  cardClicked: {
    backgroundColor: 'green',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
  },
  labelClicked: {
    color: 'white',
  },
});

export default Services;
