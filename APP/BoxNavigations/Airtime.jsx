import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from '../BoxNavScreens/Favorites';
import Pay from '../BoxNavScreens/Pay'
import History from '../BoxNavScreens/History'
import HomeScreen from '../Screens/HomeScreen/HomeScreen';

import { Text } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import AirtimePay from '../BoxNavScreens/AirtimePay';



const Tab = createBottomTabNavigator();

export default function Internet() {
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
        <Tab.Screen name='AirtimePay' component={AirtimePay} 
        options={{
            tabBarLabel:({color})=>(
                <Text style={{color:color , fontSize:20, marginTop:-7}}>
                    Pay
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
                    Profile
                </Text>
            ),

            tabBarIcon:({color,size})=>(
              <SimpleLineIcons name="notebook" size={size} color={color} />

            )
        }} />

    </Tab.Navigator>
    
  )
}