import { View, Text } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


// export default function OutlinedIcon({name , size}) {
//   return (
//     <View style={{ position: 'relative' }}>
//         <MaterialIcons name={name} size={size} color="#000" style={{ position: 'absolute', top: 0, left: 0 }} />
//         <MaterialIcons name={name} size={size - 4} color="#fff" style={{ position: 'absolute', top: 2, left: 2 }} />
//   </View>
// )
// }


const OutlinedIcon = ({ name, size, color, outlineColor }) => {
    return (
      <View style={styles.iconContainer}>
        <MaterialIcons name={name} size={size} color={outlineColor} style={styles.iconOutline} />
        <MaterialIcons name={name} size={size - 4} color={color} style={styles.iconInner} />
      </View>
    );
  };
  

  export default OutlinedIcon
  

  const styles = StyleSheet.create({
    iconContainer: {
      position: 'relative',
      width: 50,
      height: 50,
    },
    iconOutline: {
      position: 'absolute',
      zIndex: 1,
    },
    iconInner: {
      position: 'absolute',
      zIndex: 2,
      top: 2,
      left: 2,
    },
  });
  
  