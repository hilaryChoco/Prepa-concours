import {SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MyEvaluation from "../../components/Evaluation/MyEvaluation";
import NewEvaluation from "../../components/Evaluation/NewEvaluation";

const Tabs = createMaterialTopTabNavigator();

function QuestionTab() {
  return (
    <Tabs.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          color: "white",
          textTransform: "none",
          fontSize: 18,
        },
        tabBarStyle: { backgroundColor: "#3399ff" },
      }}
    >
      <Tabs.Screen
        name="Mes évaluations"
        component={MyEvaluation}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="Nouvelle évaluation"
        component={NewEvaluation}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
}

const EvaluationScreen = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#3399ff", flexDirection: "column" }}
    >
      <View
        style={{
          height: 50,
          paddingHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#3399ff",
        }}
      >
        <AntDesign
          name="arrowleft"
          size={26}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <Text
          style={{
            fontSize: 20,
            color: "white",
            fontWeight: "bold",
            left: 30,
          }}
        >
          Auto Evaluation
        </Text>
      </View>
      <QuestionTab />
    </SafeAreaView>
  );
};

export default EvaluationScreen;

const styles = StyleSheet.create({});
