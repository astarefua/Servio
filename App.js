import React, {useContext, useEffect, useState } from 'react';
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

import Signup from './APP/Screens/LoginScreens/Signup';
import Login from './APP/Screens/LoginScreens/Login';
import ForgotPasswordScreen from './APP/Screens/LoginScreens/ForgotPasswordScreen';

import AuthContextFile , {AuthContext} from './APP/Firebase/AuthContextFile';



import Splash from './APP/Screens/LoginScreens/Splash';



const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      
    >
      <Stack.Screen name="Splash" component={Splash}        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={Login}         options={{ headerShown: false }} 
      />
      <Stack.Screen name="Signup" component={Signup}         options={{ headerShown: false }} 
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}         options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      
    >
      <Stack.Screen
        name="Welcome"
        component={HomeScreen}
        options={{ headerShown: false }}

         
        
      />
      <Stack.Screen name="Cards" component={CardsTitle}/>
        <Stack.Screen name="SendMoney" component={SendMoney}
                  options={{
                    headerTitle: "Send", 
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      textAlign: 'center', 
                      flex: 1,
                    },
                    headerTitleAlign: 'center', 
                  }}
        />
        <Stack.Screen name="Airtime" component={Airtime}
                  options={{
                    headerTitle: "Pay", 
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      textAlign: 'center', 
                      flex: 1,
                    },
                    headerTitleAlign: 'center', 
                  }}
        />
        <Stack.Screen name="Internet" component={Internet}
                  options={{
                    headerTitle: "Pay", 
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      textAlign: 'center', 
                      flex: 1,
                    },
                    headerTitleAlign: 'center', 
                  }}
        />
        <Stack.Screen name="Bills" component={Bills}
                  options={{
                    headerTitle: "Pay",
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      textAlign: 'center', 
                      flex: 1,
                    },
                    headerTitleAlign: 'center', 
                  }}
        />
        <Stack.Screen name="Sms" component={Sms}
                  
        />
        <Stack.Screen name="Curency" component={Curency}
                  options={{
                    headerTitle: "CurrencyConverter", 
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      textAlign: 'center', 
                      flex: 1,
                    },
                    headerTitleAlign: 'center',
                  }}
        />
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
        <Stack.Screen name="AIScreen" component={AIScreen}  
        options={{
          headerTitle: "AI Chat", 
          headerTitleStyle: {
            fontWeight: 'bold',
            textAlign: 'center',
            flex: 1,
          },
          headerTitleAlign: 'center', 
        }}/>
        <Stack.Screen name="ServiceOrderScreen" component={ServiceOrderScreen}/> 
      
        <Stack.Screen name="ViewCartScreen" component={ViewCartScreen}/> 
      
        <Stack.Screen name="DeliveryScreen" component={DeliveryScreen}   options={{ headerShown: false }}/>
        
        <Stack.Screen name="CategoryOrderScreen" component={CategoryOrderScreen}/>
        <Stack.Screen name="CartViewCartScreen" component={CartViewCartScreen}/> 
        <Stack.Screen name="DeliveryDetailsScreen" component={DeliveryDetailsScreen}           options={{ headerShown: false }} 
 /> 

    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function fetchToken() {
      try {
        // await SplashScreen.preventAutoHideAsync();

        const storedToken = await AsyncStorage.getItem("token");

        if (storedToken) {
          authCtx.authenticate(storedToken);
        }

        setIsTryingLogin(false);
      } catch (error) {
        console.log("Error fetching token:", error);
        setIsTryingLogin(false);
      } finally {
        await SplashScreen.hideAsync();
      }
    }

    fetchToken();
  }, []);

  if (isTryingLogin) {
    return null;
  }

  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextFile>
        <Root />
      </AuthContextFile>
    </>
  );
}



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








//-------------------------------------------------------------------------------------------------------------------
 













































































































































































































































































































