import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React from 'react'
import Header from '@/src/components/header/header'

export default function Adocao() {

  const data = [
    {
      id: 1,
      name: 'Zeca',
      description: 'Lorem Ipsum',
    }
  ];

  return (
    <View>
      <Header title='Adoção'/>
      <SafeAreaView>
        <FlatList
        data={data}
        renderItem={({item}) => <Text>{item}</Text>
        }>

        </FlatList>
      </SafeAreaView>

    </View>
  )
}