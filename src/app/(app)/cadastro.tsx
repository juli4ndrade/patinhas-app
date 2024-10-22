import { View, Text, TouchableOpacity, GestureResponderEvent } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import Input from '@/src/components/input/input';

export default function Cadastro() {
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: GestureResponderEvent) => {
    e.preventDefault();

    // Resetando erros
    setEmailError('');
    setPasswordError('');
    setFormError('');

    // Validações
    if (!name || !telephone || !city || !state || !email || !password || !confirmPassword) {
      setFormError('Todos os campos devem ser preenchidos.');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('E-mail inválido');
      return;
    }

    if (password.length < 7) {
      setPasswordError('A senha deve ter pelo menos 7 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError('As senhas não coincidem.');
      return;
    }

    try {
      await RegisterRequest({ name, telephone, city, state, email, password, confirmPassword });
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
      {formError ? <Text className="text-red-500">{formError}</Text> : null}
      <View className="flex justify-center items-center gap-10 mt-[50px]">
        <Input placeholder='Nome' onChangeText={setName} name='name' value={name}/>
        <Input placeholder='Telefone' onChangeText={setTelephone} name='telephone' value={telephone}/>
        <Input placeholder='Cidade' onChangeText={setCity} name='city' value={city}/>
        <Input placeholder='Estado' onChangeText={setState} name='state' value={state}/>
        <Input 
          placeholder='Email' 
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
          }}
        />
        {emailError ? <Text className="text-red-500">{emailError}</Text> : null}
        <Input 
          placeholder='Senha'
          secureTextEntry={true}
          value={password}
          autoCapitalize="none"
          onChangeText={setPassword}
          name='password'
          type
        />
        {passwordError ? <Text className="text-red-500">{passwordError}</Text> : null}
        <Input 
          placeholder='Confirmar Senha'
          secureTextEntry={true}
          value={confirmPassword}
          autoCapitalize="none"
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity 
          className='bg-white border-[#01377D] border-2 rounded-xl w-[300px] h-[50px] flex justify-center items-center' 
          onPress={handleSubmit}
        >
          <Text className='text-[#01377D] text-xl font-semibold'>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}



