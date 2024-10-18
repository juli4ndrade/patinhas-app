import { View, Text, TextInput, TouchableOpacity, GestureResponderEvent } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Link } from "expo-router";
import { useForm } from "react-hook-form";
import Input from '@/src/components/input/input'
import SubmitButton from '@/src/components/submitButton/submitButton';

export default function Cadastro() {
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPasword, setConfirmPassword] = useState('');
  const [roleId, setRoleId] = useState("");


  const handleSubmit = (e:  GestureResponderEvent) => {
    e.preventDefault();
    
  }

  return (
    <View className="flex items-center w-full h-full bg-white">
      <View className="flex items-center mt-[50px]">
        <Text className="text-lg text-[#646A6C] font-normal">Necessário algumas informações para continuar</Text>
      </View>
      <View className="flex justify-center items-center gap-10 mt-[50px]">
      <Input placeholder='Nome' 
      onChangeText={setName}
      name='name'/>
      <Input placeholder='Telefone'
      onChangeText={setTelephone}
      name='telephone'/>
      <Input placeholder='Cidade'
      onChangeText={setCity}
      name='city'/>
      <Input placeholder='Estado'
      onChangeText={setState}
      name='state'/>
      <Input placeholder='Email'
      onChangeText={setEmail}
      name='email'/>
      <Input placeholder='Senha'
      onChangeText={setPassword}
      name='password'/>
      <Input placeholder='Confirmar Senha'
      onChangeText={setConfirmPassword}/>
      <SubmitButton title='Cadastrar' onPress={handleSubmit}/>
      </View>
    </View>
  )
}
