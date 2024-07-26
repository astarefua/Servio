import { View, Text , StyleSheet, TextInput, ScrollView} from 'react-native'
import React , {useContext} from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Ionicons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import IconButton from '../../UI/IconButton';
import { AuthContext } from '../../Firebase/AuthContextFile';




export default function SearchBar() {
    const authCtx = useContext(AuthContext);
  return (
    <View>
        <View style={styles.header}>
        <View style={styles.heading}>
            {/* <MaterialIcons name = "home"  size={30} color='green'/>

            <MaterialIcons name = "person" size={30}  color='green' />       */}

            {/* <Ionicons name="notifications-outline" size={27} color="black" /> */}

            <SimpleLineIcons name="logout" size={24} color="black" onPress={authCtx.logout}/>

        </View>


        <View style={styles.appNameContainer}>
           <Text style={styles.appName}>Ser</Text><Text style={styles.appName1}>vio</Text>
        </View>

        <View>
        <Ionicons name="person-outline" size={27} color="black" />
        </View>

        
      
      
      
        </View>


    <View style={styles.searchBox}>
            
            <TextInput style={styles.input} placeholder='Search Servioo' ></TextInput>
           

        </View>
       

        
    </View>
      )
}

const styles = StyleSheet.create({
    header:{
        // backgroundColor:'gray',
        // paddingBottom:60,
        // borderBottomLeftRadius:80,
        
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
        

        
        
    },
    heading:{
        // display:'flex',
        // flexDirection:'row',
        // justifyContent:'space-between'


    },



    appNameContainer:{
    display:'flex',
    // justifyContent:'center',
    // alignItems:'center',
    flexDirection:'row',
    marginTop:-5
    
    },
    appName:{
        fontSize:30,
        color:"#28a745"
    },
    appName1:{
        fontSize:30,
        color:'#45b3e0'
    },
    input:{
        height:50,
        
        borderColor: 'white',
        borderRadius:3,
        paddingLeft:15,
        marginLeft:20,
        marginRight:20,
        borderWidth: 1,
        backgroundColor:'white',
        elevation: 3,
        shadowColor: '#fff',

      shadowOpacity: 0.25,
    shadowRadius: 2,
    
        
        
    },
    searchBox:{
        flex:1
    }
})