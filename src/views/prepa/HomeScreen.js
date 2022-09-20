import { Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome5, FontAwesome,MaterialIcons } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#3399ff', flexDirection:'column'}}>
        <StatusBar
        animated={true}
        barStyle={'dark-content'}
        hidden={false}
        />

        <View style={{
            flex:1, 
            flexDirection:'row', 
            justifyContent:'space-between', 
            marginHorizontal:20,
            marginVertical:15,
        }}>
            <TouchableOpacity style={{flexDirection:'row'}} onPress={() => navigation.navigate('Profile')}>
                <View style={styles.circle}>
                    <Text style={{fontSize:30, color:'#99ccff', fontWeight:'bold'}}>HM</Text>
                </View>
                <View style={{left:10, top:13}}>
                    <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>Hilary Madjou,</Text>
                    <Text style={{color:'white', fontSize:12, top:2}}>Ravie de vous revoir!</Text>
                </View>
            </TouchableOpacity>            
            <AntDesign name="menu-fold" size={28} color="white" style={{marginTop:20}} onPress={() => navigation.openDrawer()}/>
        </View>

        <View style={{
            flex:9.5, 
            backgroundColor:'white', 
            borderTopLeftRadius:40, 
            borderTopRightRadius:40,
        }}>

        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    circle:{
        backgroundColor:'white', 
        borderRadius:50, 
        padding:10, 
        alignItems:'center',
        justifyContent:'center', 
        height:60, 
        width:60
    },
})