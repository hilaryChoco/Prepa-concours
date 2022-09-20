import React from 'react'
import {Image,FlatList, SafeAreaView, StatusBar, StyleSheet, Dimensions, Text, TouchableOpacity, View} from 'react-native';
import {useAuth} from "../../hooks/Auth"

const {width, height} = Dimensions.get('window');

const slides = [
    {
        id:'1',
        title:'Cours',
        description:'Des cours bien explicites pour vous permettre de facilement assimiler les notions qui viennent au concours.',
        image: require('./images/cours.jpg'),
    },

    {
        id:'2',
        title:'Quiz',
        description:'Un nombre important de quiz pour vous permettre de tester votre apprentissage.',
        image: require('./images/quiz.jpg'),
    },

    {
        id:'3',
        title:'Forums',
        description:'Des forums des différentes disciplines à votre disposition pour poser vos questions en cas de préoccupation.',
        image: require('./images/forum.jpg'),
    },

    {
        id:'4',
        title:'Anciens Sujets',
        description:'Plus de 100 anciens sujets avec corrigés pour vous entrainer.',
        image: require('./images/sujet.jpg'),
    },
];

const Slide = ({item}) => {
    return(
        <View style={{alignItems:'center'}}>
            <Image 
              source={item.image}
              style={{height:'75%', width, resizeMode: 'contain' }}
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    );
};

function OnBoardingScreen({navigation}) {

  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0); 

  const ref = React.useRef(null); 

  const Footer = () => {
    return(
        <View
         style={{
            height: height * 0.25, 
            justifyContent:'space-between', 
            paddingHorizontal:20,
         }}>
            <View
             style={{
                flexDirection:'row',
                justifyContent:'center',
                marginTop:20,
             }}>
                {slides.map((_, index) => (
                  <View 
                    key={index} 
                    style={[
                      styles.indicator, 
                      currentSlideIndex == index && {
                        backgroundColor:'#3399ff', 
                        width:25,
                    },
                   ]} 
                 />
                ))}
            </View>
            <View style={{marginBottom:20}}>
                {
                    currentSlideIndex == slides.length - 1 ? 
                    (
                    <View style={{height:50}}>
                        <TouchableOpacity style={[styles.btn]} onPress={() => navigation.replace('WelcomeScreen')} >
                            <Text style={{fontWeight:'bold', fontSize:15, color:'white'}}>Commencer</Text>
                        </TouchableOpacity>
                    </View>
                    ):(                 
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity 
                        onPress={skip}
                        style={[
                            styles.btn, 
                            {
                                backgroundColor:'transparent', 
                                borderWidth:1,
                                borderColor:'#3399ff'
                            },
                        ]}>
                            <Text style={{fontWeight:'bold', fontSize:15, color:'#3399ff'}}>Ignorer</Text>
                        </TouchableOpacity>
                        <View style={{width:15}}/>
                        <TouchableOpacity style={[styles.btn]} onPress={goNextSlide}>
                            <Text style={{fontWeight:'bold', fontSize:15, color:'white'}}>Suivant</Text>
                        </TouchableOpacity>
                </View>
                )
                }
                

            </View>
        </View>
    );
  };

  const updateCurrentSlideIndex = e =>{
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX/width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () =>{
    const nextSlideIndex = currentSlideIndex + 1;
    if(nextSlideIndex != slides.length){        
        const offset = nextSlideIndex * width;
        ref?.current?.scrollToOffset({offset});
        setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const skip = () =>{
    const lastSlideIndex = slides.length-1;
    const offset = lastSlideIndex * width;
    ref?.current?.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'#e6f2ff'}}>
        <StatusBar
         animated={true}
         barStyle={'dark-content'}
         hidden={false}
        />
        <FlatList
            ref={ref}
            onMomentumScrollEnd={updateCurrentSlideIndex}
            pagingEnabled
            data={slides}
            contentContainerStyle={{height: height*0.75}}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <Slide item={item} />}
        />
        <Footer/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    title:{
        color:'black',
        fontSize:30,
        fontWeight:'bold',
        marginTop:5,
        textAlign:'center',
    },

    description:{
        color:'black',
        fontSize:17,
        marginTop:10,
        maxWidth:width,
        textAlign:'center',
        lineHeight:23,
    },

    indicator:{
        height:2.5,
        width:10,
        backgroundColor:'grey',
        marginHorizontal:3,
        borderRadius:2,
    },

    btn:{
        flex:1,
        height:50,
        borderRadius:5,
        backgroundColor:'#3399ff',
        justifyContent:'center',
        alignItems:'center',
    },
});

export default OnBoardingScreen