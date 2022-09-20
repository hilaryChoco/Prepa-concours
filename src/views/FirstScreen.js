import React, { useEffect } from 'react';
import {Image,SafeAreaView, StatusBar, StyleSheet,Text, TouchableOpacity, View} from 'react-native';
import chapeau from "../../assets/chapeau.png";
import { useAuth } from '../hooks/Auth';

function FirstScreen({navigation}) {
  const {auth} = useAuth();
  useEffect(() =>{
    if(auth.page){
      navigation.navigate(auth.page)
    }
  }, [])

  return (
    <View style={{flex: 1, backgroundColor: '#e6f2ff'}}>
      <StatusBar
        animated={true}
        barStyle={'dark-content'}
        hidden={false}
      />
      <View style={{flex: 1, margin:30, flexDirection:'column'}}>
              <Image source={chapeau} style={styles.image}/>

              <Text style={{
                  fontSize:40, 
                  alignItems:'center',
                  marginBottom:50,
                  textAlign:'center',
                  color:'#3399ff',
                  fontFamily:'Gill Sans',
              }}>Pourquoi êtes vous là??</Text>
            
            <View style={{flex:0.5, flexDirection:'column'}}>
              <TouchableOpacity style={styles.prepa} onPress={() => navigation.navigate('OnBoardingScreen')}>
                  <Text style={{fontSize:30, fontWeight:'bold', color:'red', marginRight:5}}>Prépa concours</Text>
              </TouchableOpacity>

              <Text style={{ fontSize:20, textAlign:'center', color:'blue', margin:10}}>Ou</Text>

              <TouchableOpacity style={styles.cours} onPress={() => navigation.navigate('OnBoardingScreen1')}>
                  <Text style={{fontSize:30, fontWeight:'bold', color:'red', marginRight:10}}>Cours en ligne</Text>
              </TouchableOpacity>
            </View>            
      </View>
    </View>
  )
}

const styles = StyleSheet.create({ 
  image:{
    width:300,
    left:16, 
    marginBottom:90, 
    flex:0.3,    
  },

  prepa:{
    backgroundColor:'#99c2ff', 
    height:80,
    alignItems:'center', 
    justifyContent:'center',
    borderRadius:5,
    borderWidth:2,
    borderColor:'#3399ff',
    marginBottom:15,
  },

  cours:{
    backgroundColor:'#99c2ff', 
    height:80,
    alignItems:'center', 
    justifyContent:'center',
    borderRadius:5,
    borderWidth:2,
    borderColor:'#3399ff',
    marginTop:15,
  },

})

export default FirstScreen