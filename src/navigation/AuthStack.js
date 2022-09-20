import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react'
import FirstScreen from "./../views/FirstScreen";
import OnBoardingScreen from "./../views/prepa/OnBoardingScreen"
import OnBoardingScreen1 from "./../views/cours/OnBoardingScreen1"
import WelcomeScreen from "./../views/prepa/WelcomeScreen"
import CourseLoginScreen from "./../views/cours/CourseLoginScreen"
import SignInScreen from "./../views/prepa/SignInScreen"
import LoginScreen from "./../views/prepa/LoginScreen"


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="FirstScreen"
    >
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <Stack.Screen name="OnBoardingScreen1" component={OnBoardingScreen1} />
        <Stack.Screen name="CourseLoginScreen" component={CourseLoginScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} /> 
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})