import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Sent from "../BoxNavScreens/Sent";
import Scheduled from "../BoxNavScreens/Scheduled";
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import History from "../BoxNavScreens/History";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";

const Tab = createBottomTabNavigator();

export default function Internet() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#4CAF50",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Sent"
        component={Sent}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 20, marginTop: -7 }}>
              Sent
            </Text>
          ),

          tabBarIcon: ({ color, size }) => (
            <Feather name="send" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Scheduled"
        component={Scheduled}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ color: color, fontSize: 20, marginTop: -7 }}>
              Scheduled
            </Text>
          ),

          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
