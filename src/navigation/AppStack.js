import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from '../views/prepa/HomeScreen';
import ForumScreen from '../views/prepa/ForumScreen';
import ProfileScreen from '../views/prepa/ProfileScreen';
import Biologie from '../components/Cours/Biologie';
import Chimie from '../components/Cours/Chimie';
import Physique from '../components/Cours/Physique';
import Anglais from '../components/Cours/Anglais';
import Culture from '../components/Cours/Culture';
// import MenuScreen from '../views/prepa/MenuScreen';

import {
  AntDesign
} from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";
import BiologieQ from '../components/Quiz/BiologieQ';
import ChimieQ from '../components/Quiz/ChimieQ';
import PhysiqueQ from '../components/Quiz/PhysiqueQ';
import AnglaisQ from '../components/Quiz/AnglaisQ';
import CultuteQ from '../components/Quiz/CultuteQ';
import InfosScreen from '../views/prepa/InfosScreen';
import SujetScreen from '../views/prepa/SujetScreen';
import EvaluationScreen from '../views/prepa/EvaluationScreen';
import StatScreen from '../views/prepa/StatScreen';
import ParamScreen from '../views/prepa/ParamScreen';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

// const Stack = createNativeStackNavigator();

const Tabs = createMaterialTopTabNavigator();

// Menu de navigation pour les différents cours
function CoursesTab() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: { width: "auto" },
        tabBarScrollEnabled: true,
        tabBarLabelStyle: {
          color: "white",
          textTransform: "none",
          fontSize: 16,
        },
        tabBarStyle: { backgroundColor: "#3399ff" },
      }}
    >
      <Tabs.Screen
        name="Biologie"
        component={Biologie}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="Chimie"
        component={Chimie}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="Physique"
        component={Physique}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="Anglais"
        component={Anglais}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="Culture Generale"
        component={Culture}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
}

// Menu de navigation pour les différents quiz
function QuizTab() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: { width: "auto" },
        tabBarScrollEnabled: true,
        tabBarLabelStyle: {
          color: "white",
          textTransform: "none",
          fontSize: 16,
        },
        tabBarStyle: { backgroundColor: "#3399ff" },
      }}
    >
      <Tabs.Screen
        name="Biologie"
        component={BiologieQ}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="Chimie"
        component={ChimieQ}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="Physique"
        component={PhysiqueQ}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="Anglais"
        component={AnglaisQ}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="Culture generale"
        component={CultuteQ}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
}


const Tab = createBottomTabNavigator();

function HomeTabs() {
      return (
        <Tab.Navigator
          initialRouteName="Accueil"
          screenOptions={({ route }) => ({
            tabBarStyle: { backgroundColor: "#3399ff", borderTopColor: "#3399ff" },
            tabBarIcon: ({ focused, color }) => {
              let iconName;
    
              if (route.name === "Cours") {
                iconName = focused ? "book" : "book-outline";
              } else if (route.name === "Quiz") {
                iconName = focused ? "help-circle" : "help-circle-outline";
              } else if (route.name == "Accueil") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name == "Forums") {
                iconName = focused ? "chatbubbles" : "chatbubbles-outline";
              } else if (route.name == "Profile") {
                iconName = focused ? "person" : "person-outline";
              }
    
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={28} color={color} />;
            },
            tabBarActiveTintColor: "#1a1aff",
            tabBarInactiveTintColor: "white",
          })}
        >
          <Tab.Screen
            name="Cours"
            component={CoursesTab}
            options={{
              header: ({ navigation, route, options, back }) => {
                return (
                  <View
                    style={{
                      height: 70,
                      paddingTop: 20,
                      paddingHorizontal: 20,
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "#3399ff",
                    }}
                  >
                    <AntDesign
                      name="menu-fold"
                      size={26}
                      color="white"
                      onPress={() => navigation.openDrawer()}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        color: "white",
                        fontWeight: "bold",
                        left: 30,
                      }}
                    >
                      Cours
                    </Text>
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Quiz"
            component={QuizTab}
            options={{
              header: ({ navigation, route, options, back }) => {
                return (
                  <View
                    style={{
                      height: 70,
                      paddingTop: 20,
                      paddingHorizontal: 20,
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "#3399ff",
                    }}
                  >
                    <AntDesign
                      name="menu-fold"
                      size={26}
                      color="white"
                      onPress={() => navigation.openDrawer()}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        color: "white",
                        fontWeight: "bold",
                        left: 30,
                      }}
                    >
                      Quiz
                    </Text>
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Accueil"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Forums"
            component={ForumScreen}
            options={{
              header: ({ navigation, route, options, back }) => {
                return (
                  <View
                    style={{
                      height: 70,
                      paddingTop: 20,
                      paddingHorizontal: 20,
                      flexDirection: "row",
                      alignItems: "center",
                      backgroundColor: "#3399ff",
                    }}
                  >
                    <AntDesign
                      name="menu-fold"
                      size={26}
                      color="white"
                      onPress={() => navigation.openDrawer()}
                    />
                    <Text
                      style={{
                        fontSize: 20,
                        color: "white",
                        fontWeight: "bold",
                        left: 30,
                      }}
                    >
                      Forums
                    </Text>
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />
        </Tab.Navigator>
      );
    }

const AppStack = () => {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeTabs" component={HomeTabs} />
      <Drawer.Screen name="Infos" component={InfosScreen} />
      <Drawer.Screen name="Sujets" component={SujetScreen} />
      <Drawer.Screen name="Evaluation" component={EvaluationScreen} />
      <Drawer.Screen name="Stats" component={StatScreen} />
      <Drawer.Screen name="Param" component={ParamScreen} />
    </Drawer.Navigator>
);
}

export default AppStack

const styles = StyleSheet.create({})