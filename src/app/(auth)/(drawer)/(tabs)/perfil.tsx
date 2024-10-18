import Header from "@/src/components/header/header";
import axios from "axios";
import React, { useEffect, useState } from "react"
import { FlatList, Text, View } from "react-native";

export default function Perfil(){
    const [users,setUsers] = useState([]);

        useEffect(() =>{
         axios.get('https://jsonplaceholder.typicode.com/users')
         .then((response) => setUsers(response.data)).catch((err) => console.log(err))
     }, []);
     
     const renderUserCard = ({item}) =>{
         return(
             <View>
                 <Text> {item.name} </Text>
                 <Text> {item.email} </Text>
                 <Text> {item.username} </Text>
                 <Text> {item.website} </Text>
             </View>
         )
     }
     return(
        <View>
            <Header title="Perfil"/>
            <FlatList
            data={users}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderUserCard}
            />
        </View>
     )
   
}