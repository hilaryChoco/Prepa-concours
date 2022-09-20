import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import physique from "./images/physique.png";
import biologie from "./images/biologie.png";
import chimie from "./images/chimie.png";
import anglais from "./images/anglais.png";
import culture from "./images/culture.png";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Questions from "../../components/Forums/Questions";
import MesQuestions from "../../components/Forums/MesQuestions";

const Tabs = createMaterialTopTabNavigator();


const Card = ({ image, matiere, setDiscipline }) => {
  return (
    <TouchableOpacity style={styles.cardContainer}
    onPress={() => {
      setDiscipline(matiere)
    }}
    >
      <Image
        source={image}
        resizeMode="contain"
        style={{ width: 100, height: 100}}
      />
      <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
        {matiere}
      </Text>
    </TouchableOpacity>
  );
};

const ForumScreen = () => {
  const [discipline, setDiscipline] = useState(null)
  const cardItems = [
    {
      id: 1,
      image: biologie,
      matiere: "Biologie",
    },
    {
      id: 2,
      image: chimie,
      matiere: "Chimie",
    },
    {
      id: 3,
      image: physique,
      matiere: "Physique",
    },
    {
      id: 4,
      image: anglais,
      matiere: "Anglais",
    },
    {
      id: 5,
      image: culture,
      matiere: "Culture Générale",
    },
  ];
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#3399ff", flexDirection: "column" }}
    >
      { discipline == null ?
      <>
         <View style={styles.container}>
        {cardItems.map((data) => (
          <Card key={data.id} image={data.image} matiere={data.matiere} setDiscipline={setDiscipline} />
        ))}
        </View>
      </>
    :
    <>
      <CoursesTab/>
    </>
    }
     
    </SafeAreaView>
  );
};

function CoursesTab(){
  return(
    
    <Tabs.Navigator screenOptions={{ headerShown:false, tabBarLabelStyle:{color:"white", textTransform:'none', fontSize:18}, tabBarStyle:{backgroundColor:'#3399ff'}}}>
      <Tabs.Screen name='Questions' component={Questions} options={{ headerShown: false }}/> 
      <Tabs.Screen name='Mes questions' component={MesQuestions} options={{ headerShown: false }}/>
    </Tabs.Navigator>
  );
}

export default ForumScreen;

const styles = StyleSheet.create({
  cardContainer: {
    width: 150,
    height: 150,
    backgroundColor: "#b3d9ff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent:'center',
    marginVertical: 15,
    marginHorizontal:18,
  },
  imgContainer: {
    width: "100%",
    height: "75%",
  },
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
