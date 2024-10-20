import { View, Text, Image, TouchableOpacity, GestureResponderEvent } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useForm, Controller} from 'react-hook-form'
import React, { useContext, useState } from 'react'
import { Link, useRouter } from 'expo-router'
import Input from '@/src/components/input/input'
import SubmitButton from '@/src/components/submitButton/submitButton';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [emailError, setEmailError] = useState('');

  const handleSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault();
    try {
      const data = await loginRequest({ email, password });
      await AsyncStorage.setItem('@user_token', data.token);
      console.log('Login realizado com sucesso!');
      router.push('/');
      
 
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  }; 

  return (
    <View className='bg-[#01377D] flex-1'>
      <View className='w-full h-[140px] flex justify-center items-center pt-[25px] '>
        <Image source={require("@/src/assets/logo.png")} className='w-[75px] h-[75px]'/>
      </View>
      <View className='flex-1 items-center justify-center bg-white rounded-t-[40px] pt-[100px]'>
        <Text className='text-[#01377D] font-semibold text-5xl'>Login</Text>
        <View className='flex flex-col gap-10 mt-[100px]'>
        <Input placeholder='Email' 
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
         onChangeText={setPassword}
         autoCapitalize="none"
         />
         <TouchableOpacity className='bg-white border-[#01377D] border-2 rounded-xl w-[300px] h-[50px] flex justify-center items-center' onPress={handleSubmit}>
          <Text className='text-[#01377D] text-xl font-semibold'>Entrar</Text>
        </TouchableOpacity>
        </View>
        <Text className='text-[#646A6C] text-lg mt-[100px] mb-[100px]'> Não possui cadastro? <Link href={'/cadastro'} className='underline-offset-2 text-[#646A6C]'>Realize agora</Link></Text>
      </View>
    </View>
  )
}