import "react-native-gesture-handler";
import { getHeaderTitle } from "@react-navigation/elements";
import { ScrollView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppStack from "./src/navigation/AppStack";
import AuthStack from "./src/navigation/AuthStack";
import { AuthContext, useAuth } from "./src/hooks/Auth";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
// import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";



const Stack = createNativeStackNavigator();


export default function App() {
  const [auth, setAuth] = useState({page:null, isLogin:false});
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      <NavigationContainer>
        {!auth.isLogin ? (
          <>
            <AuthStack />
          </>
        ) : (
          <>
            <AppStack />
          </>
        )}
      </NavigationContainer> 
    </AuthContext.Provider>
  );
}
