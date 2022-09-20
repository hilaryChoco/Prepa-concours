import {ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CoursesItem from '../../consts/CoursesItem';

const Card = ({matiere }) => {
    return (
      <TouchableOpacity style={styles.cardContainer}>
        <Text style={{ fontSize: 20, color: "blue", fontWeight: "bold" }}>
          {matiere}
        </Text>
      </TouchableOpacity>
    );
  };

const Anglais = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#e6e6e6', flexDirection:'column'}}>
    <View style={{
        flexDirection:'row', 
        paddingVertical:5, 
        height:40, 
        backgroundColor:'white'
    }}>
        <View style={{
            borderRadius:'50%', 
            backgroundColor:'blue',
            left:10,
            width:30,
            height:30,
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Text style={{
                fontSize:18, 
                color:'white', 
                fontWeight:'bold'}}
            >20</Text>
        </View>
        <Text style={{color:'#a6a6a6', fontSize:20, left:20, top:2}}>Cours</Text>
    </View> 
    <ScrollView style={{backgroundColor:'#e6e6e6', width:'100%', marginHorizontal:5, top:4}}> 
        {CoursesItem.map((data) => (
            <Card key={data.id} matiere={data.matiere}/>
        ))}
    </ScrollView>   
</View>
  )
}

export default Anglais

const styles = StyleSheet.create({
        cardContainer: {
            width:'95%',
            height: 180,
            backgroundColor: "white",
            borderRadius: 5,
            alignItems: "center",
            justifyContent:'center',
            marginVertical:5,
            marginHorizontal:3.5,
          },
})