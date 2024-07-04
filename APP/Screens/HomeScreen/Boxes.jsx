import { View, Text , StyleSheet, Image , Pressable} from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function Boxes() {
  const navigation = useNavigation();

  return (
    <View>
        <View>
            <Text style={styles.headText}>
                Our Offers Are Good
            </Text>
        </View>




        <View style={styles.container}>
        <View style={styles.rows}>
          <Pressable onPress={() => navigation.navigate('SendMoney')}>
            <View style={styles.box} >
            <FontAwesome name="money" size={28} color="black" />
            <Text>Send Mon...</Text>
          </View>
          </Pressable>


          <Pressable onPress={() => navigation.navigate('Airtime')}>
          <View style={styles.box} >
          <MaterialCommunityIcons name="clipboard-file-outline" size={28} color="black" />
            <Text>Airtime</Text>
          </View>
          </Pressable>


          <Pressable onPress={() => navigation.navigate('Internet')}>
             <View style={styles.box}>
             <Foundation name="mobile-signal" size={30} color="black" />
              <Text>Internet D...</Text>
             </View>
          </Pressable>
          </View>
         

        <View style={styles.rows}>
        <Pressable onPress={() => navigation.navigate('Bills')}>
          <View style={styles.box}>
            <MaterialIcons name="money" size={30} color="black" />
            <Text>Utility Bills</Text>
          </View>
          </Pressable>


          <Pressable onPress={() => navigation.navigate('Sms')}>
          <View style={styles.box} >
          <Ionicons name="mail-open-outline" size={30} color="black" />
            <Text>SMS&Mo...</Text>
          </View>

          </Pressable>


          <Pressable onPress={() => navigation.navigate('Curency')}>
          <View style={styles.box}>
          <MaterialIcons name="currency-exchange" size={28} color="black" />
              <Text>Convert</Text>
          </View>
          </Pressable>
        </View>




        </View>


        <View style={styles.aiImageContainer}>
            <Image source={require('./../../../assets/Pics/AI3.jpeg')} style={styles.aiImage}/>
        </View>
      
    </View>
  )
};




const styles = StyleSheet.create({

    container:{
      backgroundColor:'#f5f5f5',
      height:330,
      gap:30,
      paddingTop:15,
      paddingBottom:15,
      paddingLeft:20,
      paddingRight:10
  
    },

    headText:{
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'left',
      paddingLeft:15
    },
    rows:{
      display:'flex',
      flexDirection:'row',
      gap:30
    },
  
    box:{
      width:90,
      height: 90,
      borderRadius:15,
      backgroundColor:'white',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      elevation: 5,

      shadowOpacity: 0.25,
    shadowRadius: 4,
    
      
      
      
  
    },

    aiImage:{
        height:130,
        width:170,
        backgroundColor:'#fff',
        
    },
    aiImageContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:-70,
        zIndex:1,
        marginBottom:20,
        
        

    }



  
  })
  
  
  