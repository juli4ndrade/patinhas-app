import { View, Text, SafeAreaView, FlatList, Image } from 'react-native'
import React from 'react'
import Header from '@/src/components/header/header'

export default function Adocao() {
  return (
    <View>
      <Header title='Adoção'/>
      <View className='flex items-center justify-center mt-5'>
        <View className='flex w-[350px] h-[150px] bg-gray-200 rounded-xl justify-center'>
          <View className='flex flex-row gap-3'>
          <Image source={require('@/src/assets/cat1.png')} className='w-[150px] h-[150px] rounded-xl'/>
          <View className='pt-3 gap-2 pr-5'>
          <Text className='font-semibold text-xl'>Zeca</Text>
          <Text>Pequeno Porte</Text>
          <Text className='mt-[50px]'>São Paulo</Text>
          </View>
          </View>
          <View>
          </View>
        </View>
      </View>
    </View>
  )
}