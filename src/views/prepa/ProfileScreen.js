import {ActivityIndicatorBase,TouchableOpacity, ImageBackground, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import avatar1 from './images/avatar1.png'
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 


const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#3399ff', flexDirection:'column'}}>
        <StatusBar
        animated={true}
        barStyle={'dark-content'}
        hidden={false}
        />
        <ImageBackground source={avatar1} style={styles.imageBlock}>
          <View style={{flex:1, justifyContent:'space-between', backgroundColor:'transparent'}}>            
            <AntDesign name="arrowleft" size={28} color="black" onPress={() => navigation.navigate('Accueil')}/>
            <Text style={{fontSize:50, left:20, fontWeight:'bold'}}>Mon profil</Text>
          </View>
        </ImageBackground>
        <TouchableOpacity style={styles.iconCircle}>
          <AntDesign name="edit" size={28} color="white"/>
        </TouchableOpacity>
        <View style={{padding:20, flex:1, flexDirection:'column', backgroundColor:'white'}}>
          <Text style={{top:5, fontWeight:'bold', fontSize:20}}>Compte</Text>

          <View style={styles.information}>
            <FontAwesome name="user-circle" size={24} color="black"  style={{top:4}}/>
            <View style={{left:40}}>
              <Text style={{fontSize:20, bottom:5}}>Nom</Text>
              <Text>Madjou</Text>
            </View>
          </View>

          <View style={styles.information}>
            <View style={{left:64, top:20}}>
              <Text style={{fontSize:20, bottom:5}}>Prénom</Text>
              <Text>Hilary</Text>
            </View>
          </View>

          <View style={[styles.information, {top:80}]}>
            <FontAwesome name="mobile-phone" size={35} color="black" />
            <View style={{left:45}}>
              <Text style={{fontSize:20, bottom:5}}>Téléphone</Text>
              <Text>+237692103051</Text>
            </View>
          </View>

        </View>        
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  imageBlock:{
    top:10,
    height:300,
    padding:20,
    backgroundColor:'#e6f2ff',
  },
  iconCircle:{
    borderRadius:'50%', 
    height:50, 
    width:50, 
    backgroundColor:'#3399ff', 
    alignItems:'center', 
    justifyContent:'center', 
    left:310, 
    position:'absolute',
    zIndex:1, 
    top:295,
  },
  information:{
    flexDirection:'row',
    top:40,
    height:50
  }
})