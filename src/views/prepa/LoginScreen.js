import {SafeAreaView, ScrollView, StatusBar, Image, StyleSheet, Text, TouchableOpacity, View, Label, TextInput } from 'react-native'
import React from 'react'
import medicalstudent from './images/medicalstudent.png'
import { AntDesign } from '@expo/vector-icons'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {useAuth} from "../../hooks/Auth"

const LoginScreen = ({navigation}) => {

  const {setAuth} = useAuth();

  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: '#e6f2ff'}}>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        hidden={false}
      />
    <View style={{flexDirection:'column'}}>
      <AntDesign name="arrowleft" size={24} color="black" style={{marginTop:30, marginLeft:15}} onPress={() => navigation.goBack()}/>
      <Image source={medicalstudent} style={styles.image}/>
      <View style={{flex:1, backgroundColor:'#cce6ff', borderTopLeftRadius:30, borderTopRightRadius:30, padding:25, paddingVertical:33}}>

        <Text style={{
        fontSize: 30,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:30,
        }}>Connexion</Text>

        <View style={{marginBottom:10}}>
          <Text style={{color:'#808080', fontSize:15}}>Email</Text>
          <TextInput style={styles.inputstyle}/>
        </View>

        <View style={{marginBottom:13}}>
          <Text style={{color:'#808080', fontSize:15}}>Mot de passe</Text>
          <TextInput secureTextEntry={true} style={styles.inputstyle}/>
        </View>

        <Text style={{
          color:'#3399ff',
          left: 195,
          marginBottom:13,
        }}>Mot de passe oublié?</Text>
        
        <TouchableOpacity style={styles.btn} onPress={
              () => setAuth(auth =>({...auth, isLogin:true}))}>
            <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Connexion</Text>
        </TouchableOpacity>

        <View style={{flexDirection:'row', justifyContent:'center'}}>
          <Text>Vous n'avez pas encore de compte?</Text>
          <Text onPress={() => navigation.navigate('SignInScreen')} 
            style={{            
              color:'#3399ff',
              left:2,
            }}>Inscrivez-vous
          </Text>
        </View>

      </View>
    </View>
  </KeyboardAwareScrollView> 
  )
}

export default LoginScreen

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