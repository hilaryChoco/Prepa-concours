import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  AntDesign,
  Feather,
  Ionicons,
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";

const MenuScreen = ({ navigation }) => {
  return (
    <View
      style={{ flex: 1, backgroundColor: "#3399ff", flexDirection: "column" }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          marginVertical: 10,
        }}
      >
        <TouchableOpacity
          style={{ flexDirection: "row", top: 10 }}
          onPress={() => navigation.navigate("Profile")}
        >
          <View style={styles.circle}>
            <Text
              style={{ fontSize: 30, color: "#99ccff", fontWeight: "bold" }}
            >
              HM
            </Text>
          </View>
          <View>
            <Text
              style={{
                color: "white",
                left: 10,
                top: 3,
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Hilary Madjou
            </Text>
            <Text style={{ color: "white", left: 10, top: 8, fontSize: 18 }}>
              +237 692103051
            </Text>
          </View>
        </TouchableOpacity>
        <AntDesign
          name="closesquareo"
          size={20}
          color="#1a1aff"
          style={{ marginTop: 2 }}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          flex: 7,
          justifyContent: "space-around",
        }}
      >
        <View style={styles.container}>
          <TouchableOpacity style={styles.block}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="#66a3ff"
            />
            <Text style={styles.blockText}>Infos concours</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.block}
            onPress={() => navigation.navigate("Cours")}
          >
            <Ionicons name="book-outline" size={24} color="#66a3ff" />
            <Text style={styles.blockText}>Cours</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.block}
            onPress={() => navigation.navigate("Quiz")}
          >
            <Ionicons name="help-circle-outline" size={24} color="#66a3ff" />
            <Text style={styles.blockText}>Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.block}>
            <FontAwesome5 name="file-archive" size={24} color="#66a3ff" />
            <Text style={styles.blockText}>Anciens sujets</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.block}
            onPress={() => navigation.navigate("Forums")}
          >
            <Ionicons name="chatbubbles-outline" size={24} color="#66a3ff" />
            <Text style={styles.blockText}>Forums</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.block}>
            <FontAwesome name="graduation-cap" size={24} color="#66a3ff" />
            <Text style={styles.blockText}>S'auto-évaluer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.block}>
            <Ionicons name="md-stats-chart-sharp" size={24} color="#66a3ff" />
            <Text style={styles.blockText}>Statistiques</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.block}>
            <Feather name="settings" size={24} color="#66a3ff" />
            <Text style={styles.blockText}>Paramètres</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            marginHorizontal: 50,
            marginVertical: 35,
            flexDirection: "row",
            backgroundColor: "#3399ff",
            borderRadius: 5,
            height: 50,
            alignItems: "center",
          }}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Entypo name="log-out" size={24} color="white" style={{ left: 25 }} />
          <Text
            style={{
              fontSize: 20,
              left: 60,
              fontWeight: "bold",
              color: "white",
            }}
          >
            Se déconnecter
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
  },
  block: {
    height: 55,
    alignItems: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  container: {
    borderTopWidth: 2,
    borderColor: "#cce0ff",
    padddingVertical: 10,
    justifyContent: "center",
  },
  blockText: {
    fontSize: 20,
    left: 20,
    color: "#66a3ff",
  },
});
