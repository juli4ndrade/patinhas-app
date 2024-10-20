import { View, Text, TextInput, TouchableOpacity, GestureResponderEvent, StyleSheet } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import React, { useState } from "react";
import { Link, router } from "expo-router";
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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [roleId, setRoleId] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e:  GestureResponderEvent) => {
    e.preventDefault();
    try {
      await RegisterRequest({ name, telephone, city, state, email, password, confirmPassword, roleId });
      await loginRequest({ email, password });
      router.push('/');
      
    } catch (error) {
      console.error('Falha no registro:', error);
    }
   
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
         name='email'
         keyboardType="email-address"
         value={email}
         onChangeText={(text: string) => {
           setEmail(text);
           if (!validateEmail(text)) {
             setEmailError('E-mail inválido'); 
           } else {
             setEmailError('');
           }
         }}/>
      <Input placeholder='Senha'
      secureTextEntry
      value={password}
      autoCapitalize="none"
      onChangeText={setPassword}
      name='password'/>
      <Input placeholder='Confirmar Senha'
      secureTextEntry
      value={confirmPassword}
      autoCapitalize="none"
      onChangeText={setConfirmPassword}/>
       <TouchableOpacity className='bg-white border-[#01377D] border-2 rounded-xl w-[300px] h-[50px] flex justify-center items-center' onPress={handleSubmit}>
          <Text className='text-[#01377D] text-xl font-semibold'>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#f2f2f2',
    borderRadius: 15, // rounded-xl
    padding: 5,
    fontWeight: '500', // font-medium
  },
});
