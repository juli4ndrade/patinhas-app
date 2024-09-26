import {View , StyleSheet, Text, ImageBackground,ScrollView, } from "react-native"
import { theme } from "@/src/styles"; 
import Button from "@/src/components/button/button";
import React from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


export default function Home(){
    
    return (  
    <View  >
        <View>
        <ImageBackground style={{}}
        source={require("@/src/assets/home.png")}
        
            >
            
        <MaterialIcons name="menu" size={35} color="white" style={{padding:30}} />
        <Text style={styles.Text}>Adotar é mais que um              ato de amor...</Text>
        </ImageBackground>
        </View  >
    
    <View >
    <View style={styles.container}>
        <Button/>
    </View>    
       <View >
        <ScrollView horizontal={true} >
            <View style={{paddingTop:80, flexDirection:"row", gap:20, paddingLeft:15, paddingRight:15}}>  
                    
                            <View >
                            <ImageBackground source={require("@/src/assets/dog.png")}
                                style={{height:202,width:170, }}>
                                    <Text style={{paddingTop:165,padding:15,color:"#FFFFFF",fontSize:16,fontFamily: theme.fontFamily.bold,textAlign:"center"}}>Escolha do animal</Text>
                                </ImageBackground>
                            </View>
                            <View >
                            <ImageBackground source={require("@/src/assets/dog2.png")}
                                style={{height:202,width:170, }}>
                                    <Text style={{paddingTop:165,padding:15,color:"#FFFFFF",fontSize:16,fontFamily: theme.fontFamily.bold,textAlign:"center"}}>Escolha do animal</Text>
                                </ImageBackground>
                            </View>
                            <View >
                            <ImageBackground source={require("@/src/assets/cat1.png")}
                                style={{height:202,width:170, }}>
                                    <Text style={{paddingTop:165,padding:15,color:"#FFFFFF",fontSize:16,fontFamily: theme.fontFamily.bold,textAlign:"center"}}>Escolha do animal</Text>
                                </ImageBackground>
                            </View>
                         
            </View>
        </ScrollView>
       </View>
       </View>
   </View>
    )
}

const styles = StyleSheet.create({ 
    container:{
        paddingTop:30,
    paddingHorizontal:40,
   
   
},
    Text:{
    fontSize: 24,
    color: theme.colors.white,
    fontFamily: theme.fontFamily.bold,
    paddingTop:150,
    padding:30, 
},    
})
