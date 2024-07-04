import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from '../BoxNavScreens/Favorites';
import Pay from '../BoxNavScreens/Pay'
import History from '../BoxNavScreens/History'
import Send from '../BoxNavScreens/Send';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Text, StyleSheet} from 'react-native'


import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';




const Tab = createBottomTabNavigator();

// export default function SendMoney() {
//   return (
//     <Tab.Navigator screenOptions={{
//       tabBarActiveTintColor:'#228B22',
//       headerShown:false
//   }}>
//       {/* <Tab.Screen name="Home" component={HomeScreen} /> */}
//       <Tab.Screen name="Favorites" component={Favorites}
//       options={{
//         tabBarLabel:({color}) => (
//             <Text style={{color:color, fontSize:20 ,marginTop:-7}}>Favorites</Text>
//         ),
//         tabBarIcon:({color,size})=>{
//           <AntDesign name="staro" size={size} color={color} />

//         }
//       }} />
//       <Tab.Screen name="Pay" component={Pay}
//       options={{
//         tabBarLabel:({color}) => (
//             <Text style={{color:color, fontSize:12 ,marginTop:-7}}>Favorites</Text>
//         ),
//         tabBarIcon:({color,size})=>{
//             <MaterialIcons name='money' size={size} color={color}/>

//         }
//       }} />
//       <Tab.Screen name="History" component={History}
//       options={{
//         tabBarLabel:({color}) => (
//             <Text style={{color:color, fontSize:12 ,marginTop:-2}}>Favorites</Text>
//         ),
//         tabBarIcon:({color,size})=>{
//             <MaterialIcons name='money' size={size} color={color}/>

//         }
//       }} />


//     </Tab.Navigator>
//   );
// }




export default function SendMoney() {
  return (
    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:'#4CAF50',
        headerShown:false
    }}>
        <Tab.Screen name='Favorites' component={Favorites}
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color , fontSize:20, marginTop:-7}}>
                    Favorites
                </Text>
            ),

            tabBarIcon:({color,size})=>(
                <AntDesign name="staro" size={size} color={color} />

            )
        }}/>
        <Tab.Screen name='Send' component={Send} 
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color , fontSize:20, marginTop:-7}}>
                    Send
                </Text>
            ),

            tabBarIcon:({color,size})=>(
              <FontAwesome name="money" size={size} color={color} />

            )
        }}/>
        <Tab.Screen name='History' component={History} 
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color , fontSize:20, marginTop:-7}}>
                    History
                </Text>
            ),

            tabBarIcon:({color,size})=>(
              <SimpleLineIcons name="notebook" size={size} color={color} />

            )
        }} />

    </Tab.Navigator>
    
  )
}