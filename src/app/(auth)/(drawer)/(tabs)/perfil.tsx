import Header from "@/src/components/header/header";
import axios from "axios";
import React, { useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native";

export default function Perfil(){
    const [user,setUser] = useState([]);

        useEffect(() =>{
         axios.get()
         .then((response) => setUser(response.data)).catch((err) => console.log(err))
     }, []);
     
     const renderUserCard = ({item}) =>{
         return(
             <View>
                 <Text> {item.name} </Text>
                 <Text> {item.email} </Text>
                 <Text> {item.city} </Text>
                 <Text> {item.state} </Text>
                 <Text> {item.telephone} </Text>
             </View>
         )
     }
     return(
        <View>
            <Header title="Perfil"/>
            
        </View>
     )
   
}