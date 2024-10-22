import { View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    // Reset errors
    setEmailError('');
    setPasswordError('');
    setFormError('');

    // Validate fields
    let hasError = false;

    if (!email) {
      setEmailError('Email é obrigatório');
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError('Email inválido');
      hasError = true;
    }

    if (!password) {
      setPasswordError('Senha é obrigatória');
      hasError = true;
    }

    // If there are errors, set formError and return
    if (hasError) {
      setFormError('Todos os campos devem ser preenchidos.');
      return;
    }

    // If validation passes, proceed with login
    try {
      const response = await loginRequest({ email, password });
      await AsyncStorage.setItem('@user_token', response.token);
      console.log('Login realizado com sucesso!');
      router.push('/');
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#fff' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={10} // Ajuste conforme necessário
    >
    <ScrollView className='bg-white flex-1'>
      <View className='bg-[#01377D] w-full h-[150px] flex items-center justify-center'>
      <Image source={require("@/src/assets/logo.png")} className='w-[75px] h-[75px]' />
      </View>
      <View className='flex-1 items-center justify-center bg-white rounded-t-[40px] pt-[100px]'>
        <View className='flex flex-col gap-10 '>
        <Text className='text-[#01377D] font-semibold text-5xl text-center pb-10'>Login</Text>
          {formError ? <Text className="text-red-500 text-center">{formError}</Text> : null}
          <TextInput
            className="w-[300px] h-[50px] bg-[#f2f2f2] rounded-xl p-5 font-medium"
            placeholder="Email"
            placeholderTextColor='#646A6C'
            value={email}
            onChangeText={setEmail}
          />
          {emailError ? <Text className='text-red-500'>{emailError}</Text> : null}

          <TextInput
            className="w-[300px] h-[50px] bg-[#f2f2f2] rounded-xl p-5 font-medium"
            placeholder="Senha"
            placeholderTextColor='#646A6C'
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          {passwordError ? <Text className='text-red-500'>{passwordError}</Text> : null}

          <TouchableOpacity
            className='bg-white border-[#01377D] border-2 rounded-xl w-[300px] h-[50px] flex justify-center items-center'
            onPress={handleSubmit}
          >
            <Text className='text-[#01377D] text-xl font-semibold'>Entrar</Text>
          </TouchableOpacity>
          <Text className='text-[#646A6C] text-lg  text-center pt-10'>
          Não possui cadastro? <Link href={'/cadastro'} className='underline-offset-2 text-[#646A6C]'>Realize agora</Link>
        </Text>
        </View>
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

