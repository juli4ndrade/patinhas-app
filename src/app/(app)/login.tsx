import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useForm, Controller} from 'react-hook-form'
import React from 'react'
import { Link } from 'expo-router'
import Input from '@/src/components/input/input'
import SubmitButton from '@/src/components/submitButton/submitButton';


export default function Login() {
  return (
    <View className='bg-[#01377D] flex-1'>
      <View className='w-full h-[150px] flex justify-center items-center  '>
        <Image source={require("@/src/assets/logo2.png")}/>
      </View>
      <View className='flex-1 items-center justify-center bg-white rounded-t-[40px] pt-[100px]'>
        <Text className='text-[#01377D] font-semibold text-5xl'>Login</Text>
        <View className='flex flex-col gap-10 mt-[100px]'>
        <Input placeholder='Email'/>
        <Input placeholder='Senha'/>
        <SubmitButton title='Entrar'/>
        </View>
        <Text className='text-[#646A6C] text-lg mt-[100px] mb-[100px]'> Não possui cadastro? <Link href={'/cadastro'} className='underline-offset-2 text-[#646A6C]'>Realize agora</Link></Text>
      </View>
    </View>
  )
}