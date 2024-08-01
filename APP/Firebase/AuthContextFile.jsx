import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextFile({ children }) {
  const [authToken, setAuthToken] = useState();

  async function authenticate(token) {
    setAuthToken(token);
    try {
      await AsyncStorage.setItem("token", token);
    } catch (error) {
      console.error("Failed to save token to AsyncStorage:", error);
    }
  }

  async function logout() {
    setAuthToken(null);
    try {
      await AsyncStorage.removeItem("token");
    } catch (error) {
      console.error("Failed to remove token from AsyncStorage:", error);
    }
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextFile;
