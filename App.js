
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
import CustomHeader from './APP/Screens/HomeScreen/CustomHeader';
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
import ImageOrderScreen from './APP/Screens/PlaceOrderScreens/ImageOrderScreen';
import ViewCartScreen from './APP/Screens/PlaceOrderScreens/ViewCartScreen';
import OrderScreen from './APP/Screens/PlaceOrderScreens/OrderScreen';

//import Order from './APP/Screens/PlaceOrderScreens/Order';


// import MealDetailScreen from './APP/Screens/PlaceOrderScreens/MealDetailScreen';
// import MealListScreen from './APP/Screens/PlaceOrderScreens/MealListScreen';
 




const Stack = createNativeStackNavigator()

export default function App() {
  return (
     

  
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen}                      options={{ header: () => <CustomHeader/> }}


        />
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
        <Stack.Screen name="OrderScreen" component={OrderScreen}/> 
        {/* <Stack.Screen name="Order" component={Order}/> */}
        <Stack.Screen name="ViewCartScreen" component={ViewCartScreen}/> 
        {/* <Stack.Screen name="View" component={View}/> */}
        <Stack.Screen name="DeliveryScreen" component={DeliveryScreen}/>
        <Stack.Screen name="ImageOrderScreen" component={ImageOrderScreen}/>

        

        
        
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}








    // <SafeAreaView style={styles.safeContainer}>
    //   <ScrollView style={styles.container} >
    //   <HomeScreen/>
      
    //   <StatusBar style="auto" /> i will deal with status bar later then check if keeping it wont affect the safeareaview 
    // </ScrollView>

    // </SafeAreaView>
    


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
