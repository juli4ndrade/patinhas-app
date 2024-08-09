import { View, Pressable, Text} from 'react-native'
import {Ionicons, Feather} from '@expo/vector-icons'

export function Header() {
  return (
    <View className='bg-red-50 w-full items-center justify-between'>
        <Pressable className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
            <Ionicons name='menu' size={20} color='#121212'></Ionicons>
        </Pressable>
    </View>
  )
}