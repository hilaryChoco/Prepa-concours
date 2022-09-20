import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import medicalstudent from './images/medicalstudent.png'
import { AntDesign } from '@expo/vector-icons'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const SignInScreen = ({navigation}) => {
  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: '#e6f2ff'}}>
    <StatusBar
      animated={true}
      barStyle={'dark-content'}
      hidden={false}
    />
    <View style={{flex: 1, flexDirection:'column'}}>
      <AntDesign name="arrowleft" size={24} color="black" style={{marginTop:30, marginLeft:15}} onPress={() => navigation.goBack()}/>
      <Image source={medicalstudent} style={styles.image}/>
      <View style={{top:-160, backgroundColor:'#cce6ff', borderTopLeftRadius:30, borderTopRightRadius:30, padding:25}}>

        <Text style={{
        fontSize: 30,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:30,
        }}>Création de compte</Text>

        <View style={{marginBottom:10}}>
          <Text style={{color:'#808080', fontSize:15}}>Nom</Text>
          <TextInput style={styles.inputstyle}/>
        </View>

        <View style={{marginBottom:10}}>
          <Text style={{color:'#808080', fontSize:15}}>Prénom</Text>
          <TextInput style={styles.inputstyle}/>
        </View>

        <View style={{marginBottom:10}}>
          <Text style={{color:'#808080', fontSize:15}}>Email</Text>
          <TextInput style={styles.inputstyle}/>
        </View>

        <View style={{marginBottom:10}}>
          <Text style={{color:'#808080', fontSize:15}}>Téléphone</Text>
          <TextInput style={styles.inputstyle} keyboardType="numeric"/>
        </View>

        <View style={{marginBottom:13}}>
          <Text style={{color:'#808080', fontSize:15}}>Mot de passe</Text>
          <TextInput style={styles.inputstyle} secureTextEntry={true}/>
        </View>
        
        <TouchableOpacity style={styles.btn} onPress={
              () => navigation.navigate('HomeTabs')}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}
            >S'inscrire</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <Text>Vous avez déja un compte?</Text>
          <Text onPress={() => navigation.navigate('LoginScreen')} 
            style={{            
              color:'#3399ff',
              left:2,
            }}>Connectez-vous
          </Text>
        </View>

      </View>
    </View>
  </KeyboardAwareScrollView> 
  )
}

export default SignInScreen

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
