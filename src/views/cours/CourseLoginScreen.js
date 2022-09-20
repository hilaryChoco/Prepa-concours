import { SafeAreaView, StatusBar, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import medicalstudent from '../prepa/images/medicalstudent.png'


const CourseLoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#e6f2ff'}}>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        hidden={false}
      />
     <View style={{flex: 1, flexDirection:'column'}}>
      <AntDesign name="arrowleft" size={24} color="black" style={{marginTop:15, marginLeft:15}} onPress={() => navigation.navigate('FirstScreen')}/>
      <Image source={medicalstudent} style={styles.image}/>
      <View style={{flex:1, backgroundColor:'#cce6ff', borderTopLeftRadius:30, borderTopRightRadius:30, padding:25}}>

        <Text style={{
        fontSize: 30,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:30,
        }}>Connexion</Text>

        <View style={{marginBottom:10}}>
          <Text style={{color:'#808080', fontSize:15}}>Matricule</Text>
          <TextInput style={styles.inputstyle}/>
        </View>

        <View style={{marginBottom:13}}>
          <Text style={{color:'#808080', fontSize:15}}>Mot de passe</Text>
          <TextInput style={styles.inputstyle}/>
        </View>

        <Text style={{
          color:'#3399ff',
          left: 195,
          marginBottom:13,
        }}>Mot de passe oublié?</Text>
        
        <TouchableOpacity style={styles.btn} onPress={
              () => navigation.navigate('HomeScreen')}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Connexion</Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView> 
  )
}

export default CourseLoginScreen

const styles = StyleSheet.create({
  image:{
    left:2,
    width:370,
    height:210,
    marginBottom:20,
  },

  inputstyle:{
    borderWidth:1,
    borderColor:'#e6f2ff',
    backgroundColor:'#e6f2ff',
    height:45,
    borderRadius:5,
    padding:10,
  },

  btn:{
    backgroundColor:'#3399ff', 
    height:50,
    padding:10,
    alignItems:'center', 
    justifyContent:'center',
    borderRadius:5,
    borderWidth:2,
    borderColor:'#3399ff',
    marginBottom:15,
   },
})