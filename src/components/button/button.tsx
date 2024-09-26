import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";


interface ButtonProps{
    title:String

    OnPress:() => void
}

const Button = ({
    title
    }: ButtonProps) => {
        return (
        
            <View >       
             <TouchableOpacity style= {style.container}>
                <Text style={style.title}>{title}</Text>
            </TouchableOpacity>
    </View>
        );
    }
    
export default Button;

const style = StyleSheet.create({
    container:{
    backgroundColor:"#01377D",
    alignContent:"center",
    justifyContent:"center",
    borderRadius:25,
    width:350,
    height:50
    },
    title:{
    color:"#FFFFFF",
    fontSize:24,
    textAlign:"center"
    


    }
});