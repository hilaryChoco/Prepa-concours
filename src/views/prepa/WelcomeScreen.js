import {Image, SafeAreaView, StatusBar, StyleSheet,Text, TouchableOpacity, View} from 'react-native';
import React from 'react'
import doctor from './images/doctor.png';

const WelcomeScreen = ({navigation}) => {
  return (
       <SafeAreaView style={{flex: 1, backgroundColor: '#e6f2ff'}}>
         <StatusBar
           animated={true}
           barStyle={'dark-content'}
           hidden={false}
         />
         <View style={{flex: 1, margin:15, flexDirection:'column'}}>
           <Image source={doctor} style={styles.image}/>
           <Text style={{
            fontSize: 50,
            fontWeight:'bold',
            textAlign:'center',
            marginBottom:30,
           }}>BIENVENUE</Text>
           <Text style={{
             fontSize: 20,
             fontFamily:'Gill Sans',
             textAlign: 'center',
             lineHeight:25,
             color:'#808080',
             marginBottom:50,
           }}>
             Cette application mobile vous prépare au concours de la FMSB ( Faculté de médecine et des sciences biomédicales ).
           </Text>
           <View style={{flexDirection:'row', justifyContent:'space-around', marginBottom:20}}>
               <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('SignInScreen')}>
                   <Text style={{fontSize:18, fontWeight:'bold', color:'#3399ff'}}>Inscription</Text>
               </TouchableOpacity>
               
               <TouchableOpacity style={[styles.btn, {backgroundColor:'#3399ff'}]} onPress={() => navigation.navigate('LoginScreen')}>
                   <Text style={{fontSize:18, fontWeight:'bold', color:'white'}}>Connexion</Text>
               </TouchableOpacity>
             </View>       
         </View>
       </SafeAreaView> 
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  image:{
    width:250,
    left:45,
    marginBottom:20,
    flex:1.5  
  },

  btn:{
   backgroundColor:'transparent', 
   height:50,
   width:150,
   padding:15,
   alignItems:'center', 
   justifyContent:'center',
   borderRadius:50,
   borderWidth:2,
   borderColor:'#3399ff',
   marginBottom:15,
  },
})