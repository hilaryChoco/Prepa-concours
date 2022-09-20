import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  AntDesign
} from "@expo/vector-icons";

const SujetScreen = ({navigation}) => {
  return (
    <View
    style={{
      height: 80,
      paddingTop: 20,
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
      Anciens Sujets
    </Text>
  </View>
  )
}

export default SujetScreen

const styles = StyleSheet.create({})