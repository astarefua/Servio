
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome , Feather , Octicons,MaterialCommunityIcons} from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';



const Services = ({ iconLib, iconName, label , items}) => {

  const navigation = useNavigation();
  const [isClicked, setIsClicked] = useState(false);

  const handlePress1 = () => {
    setIsClicked(!isClicked);
  };

  const handlePress2 = () => {
    navigation.navigate('ServiceOrderScreen', { items, name: label , });

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
        case 'MaterialCommunityIcons':
          return <MaterialCommunityIcons {...iconProps} />;
        
      
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
    borderWidth:0.3,
    borderColor:'#DAEFFD',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    height:200,
    shadowOffset: { width: 0, height: 2 },
  },
  cardClicked: {
    backgroundColor: "#28a745",
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
