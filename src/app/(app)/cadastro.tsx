import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { Link } from "expo-router";
import { useForm } from "react-hook-form";
import Input from '@/src/components/input/input'
import SubmitButton from '@/src/components/submitButton/submitButton';

export default function Cadastro() {
  return (
    <View className="flex items-center w-full h-full bg-white">
      <View className="flex items-center mt-[50px]">
        <Text className="text-lg text-[#646A6C] font-normal">Necessário algumas informações para continuar</Text>
      </View>
      <View className="flex justify-center items-center gap-10 mt-[50px]">
      <Input placeholder='Nome'/>
      <Input placeholder='Cidade'/>
      <Input placeholder='Estado'/>
      <Input placeholder='Email'/>
      <Input placeholder='Senha'/>
      <Input placeholder='Confirmar Senha'/>
      <SubmitButton title='Cadastrar'/>
      </View>
    </View>
  )
}
