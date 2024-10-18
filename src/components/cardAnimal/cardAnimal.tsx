import { ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

interface CardAnimalProps {
    onPress: () => void;
    image: string;
    title: string;
    textStyles?: string;
    containerStyles?: string;
}

const CardAnimal = ({
    onPress,
    image,
    title,
    textStyles = "",
    containerStyles = "",
} : CardAnimalProps) => {
    return(
        <View >
                            <ImageBackground className='mr-2 h-[202px] w-[170px]'imageSource={require('{image}')} >
                                    <Text className='text-center text-white font-medium text-xl'>{title}</Text>
                                </ImageBackground>
                            </View>
    
    )
}

export default CardAnimal;