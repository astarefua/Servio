import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './APP/Screens/HomeScreen/HomeScreen'
import { StyleSheet, Text, View , SafeAreaView , ScrollView , StatusBar } from 'react-native';
import CardsTitle from './APP/Screens/HomeScreen/CardsTitle';
import SendMoney from './APP/BoxNavigations/SendMoney';
import Airtime from './APP/BoxNavigations/Airtime';
import Internet from './APP/BoxNavigations/Internet';
import Bills from './APP/BoxNavigations/Bills';
import Sms from './APP/BoxNavigations/Sms';
import Curency from './APP/BoxNavigations/Curency'

import BillsPay from './APP/BoxNavScreens/BillsPay';
import AccountNumber from './APP/BoxNavScreens/AccountNumber';
import EcgScreen from './APP/BoxNavScreens/EcgScreen';
import Send from './APP/BoxNavScreens/Send';
import MobileMoney from './APP/BoxNavScreens/MobileMoney';
import Bank from './APP/BoxNavScreens/Bank';
import Merchant from './APP/BoxNavScreens/Merchant';
import AirtimePay from './APP/BoxNavScreens/AirtimePay';
import PhoneNumber from './APP/BoxNavScreens/PhoneNumber';
import InternetPay from './APP/BoxNavScreens/InternetPay';
import InternetAccountNumber from './APP/BoxNavScreens/InternetAccountNumber';
import AIScreen from './APP/Screens/HomeScreen/AIScreen';

import DeliveryScreen from './APP/Screens/PlaceOrderScreens/DeliveryScreen';

import ViewCartScreen from './APP/Screens/PlaceOrderScreens/ViewCartScreen';
import DeliveryDetailsScreen from './APP/Screens/PlaceOrderScreens/DeliveryDetailsScreen';



import CartViewCartScreen from './APP/Screens/PlaceOrderScreens/CartViewCartScreen';
import ServiceOrderScreen from './APP/Screens/PlaceOrderScreens/ServiceOrderScreen';
import CategoryOrderScreen from './APP/Screens/PlaceOrderScreens/CategoryOrderScreen';



import Signin from './APP/Screens/LoginScreens/Signin';

import Phone from './APP/Screens/LoginScreens/Phone';
import PhoneVerification from './APP/Screens/LoginScreens/PhoneVerification';
import Splash from './APP/Screens/LoginScreens/Splash';
import Signup from './APP/Screens/LoginScreens/Signup';



 




const Stack = createNativeStackNavigator()



export default function App() {
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);

  

  useEffect(() => {
    // Check if user is a first-time user
    async function checkFirstTimeUser() {
      try {
        const value = await AsyncStorage.getItem('@firstTimeUser');
        if (value === null) {
          setIsFirstTimeUser(true); // User is first-time
        }
      } catch (error) {
        console.error('Error checking first-time user:', error);
      }
    }

    checkFirstTimeUser();
  }, []);

  const finishSignUp = async () => {
    // Save in async storage that sign-up is completed
    try {
      await AsyncStorage.setItem('@firstTimeUser', 'true');
      setIsFirstTimeUser(false); // No longer a first-time user
    } catch (error) {
      console.error('Error saving sign-up completion:', error);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isFirstTimeUser ? (
          <>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Terms" component={Terms} /> */}
            <Stack.Screen name="Signin" component={Signin} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="Phone" component={Phone} /> 
            <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
            {/* Add other sign-up screens as needed */}
          </>
        ) : (
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        )}
        {/* Add other main app screens */}
        <Stack.Screen name="Cards" component={CardsTitle}/>
        <Stack.Screen name="SendMoney" component={SendMoney}/>
        <Stack.Screen name="Airtime" component={Airtime}/>
        <Stack.Screen name="Internet" component={Internet}/>
        <Stack.Screen name="Bills" component={Bills}/>
        <Stack.Screen name="Sms" component={Sms}/>
        <Stack.Screen name="Curency" component={Curency}/>
        <Stack.Screen name="BillsPay" component={BillsPay}/>
        <Stack.Screen name="AccountNumber" component={AccountNumber}/>
        <Stack.Screen name="EcgScreen" component={EcgScreen}/>
        <Stack.Screen name="Send" component={Send}/>
        <Stack.Screen name="MobileMoney" component={MobileMoney}/>
        <Stack.Screen name="Bank" component={Bank}/>
        <Stack.Screen name="Merchant" component={Merchant}/>
        <Stack.Screen name="AirtimePay" component={AirtimePay}/>
        <Stack.Screen name="PhoneNumber" component={PhoneNumber}/>
        <Stack.Screen name="InternetPay" component={InternetPay}/>
        <Stack.Screen name="InternetAccountNumber" component={InternetAccountNumber}/>
        <Stack.Screen name="AIScreen" component={AIScreen}/>
        <Stack.Screen name="ServiceOrderScreen" component={ServiceOrderScreen}/> 
        {/* <Stack.Screen name="Order" component={Order}/> */}
        <Stack.Screen name="ViewCartScreen" component={ViewCartScreen}/> 
        {/* <Stack.Screen name="View" component={View}/> */}
        <Stack.Screen name="DeliveryScreen" component={DeliveryScreen}   options={{ headerShown: false }}/>
        {/* <Stack.Screen name="ImageOrderScreen" component={ImageOrderScreen}/> */}
        <Stack.Screen name="CategoryOrderScreen" component={CategoryOrderScreen}/>
        <Stack.Screen name="CartViewCartScreen" component={CartViewCartScreen}/> 
        <Stack.Screen name="DeliveryDetailsScreen" component={DeliveryDetailsScreen}           options={{ headerShown: false }} 
 /> 


      </Stack.Navigator>
    </NavigationContainer>
  );
}

















































































// export default function App() {
//   return (
     

  
//     <NavigationContainer>
//       <Stack.Navigator>

//         {/* <Stack.Screen name="Home" component={HomeScreen}        options={{ header: () => <CustomHeader/> }                options={{ header: () => ''}}


//         /> */}


// <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />

//          {/* <Stack.Screen name="Home" component={HomeScreen} />                     */}






//         <Stack.Screen name="Cards" component={CardsTitle}/>
//         <Stack.Screen name="SendMoney" component={SendMoney}/>
//         <Stack.Screen name="Airtime" component={Airtime}/>
//         <Stack.Screen name="Internet" component={Internet}/>
//         <Stack.Screen name="Bills" component={Bills}/>
//         <Stack.Screen name="Sms" component={Sms}/>
//         <Stack.Screen name="Curency" component={Curency}/>
//         <Stack.Screen name="BillsPay" component={BillsPay}/>
//         <Stack.Screen name="AccountNumber" component={AccountNumber}/>
//         <Stack.Screen name="EcgScreen" component={EcgScreen}/>
//         <Stack.Screen name="Send" component={Send}/>
//         <Stack.Screen name="MobileMoney" component={MobileMoney}/>
//         <Stack.Screen name="Bank" component={Bank}/>
//         <Stack.Screen name="Merchant" component={Merchant}/>
//         <Stack.Screen name="AirtimePay" component={AirtimePay}/>
//         <Stack.Screen name="PhoneNumber" component={PhoneNumber}/>
//         <Stack.Screen name="InternetPay" component={InternetPay}/>
//         <Stack.Screen name="InternetAccountNumber" component={InternetAccountNumber}/>
//         <Stack.Screen name="AIScreen" component={AIScreen}                     options={{ presentation: 'modal', headerShown: false }} // Present as modal

//         />
//         <Stack.Screen name="ServiceOrderScreen" component={ServiceOrderScreen}/> 
//         {/* <Stack.Screen name="Order" component={Order}/> */}
//         <Stack.Screen name="ViewCartScreen" component={ViewCartScreen}/> 
//         {/* <Stack.Screen name="View" component={View}/> */}
//         <Stack.Screen name="DeliveryScreen" component={DeliveryScreen}   options={{ headerShown: false }}/>
//         {/* <Stack.Screen name="ImageOrderScreen" component={ImageOrderScreen}/> */}
//         <Stack.Screen name="CategoryOrderScreen" component={CategoryOrderScreen}/>
//         <Stack.Screen name="CartViewCartScreen" component={CartViewCartScreen}/> 
//         <Stack.Screen name="DeliveryDetailsScreen" component={DeliveryDetailsScreen}           options={{ headerShown: false }} 
//  /> 


        
 
        
        
//       </Stack.Navigator>
      
//     </NavigationContainer>
//   );
// }








   
const styles = StyleSheet.create({
  safeContainer: {
    flex:1,
    
     paddingTop: StatusBar.currentHeight,

    
    
    
  },
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    
    
  },
});
