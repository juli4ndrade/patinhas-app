import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'

interface CustomButtomProps {
    onPress: (onPress: any) => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
}

const CustomButton = ({
    onPress,
    title,
    textStyles = "",
    containerStyles = "",
} : CustomButtomProps) => {
    return(
    <TouchableOpacity 
    activeOpacity={0.7}
    className={'bg-[#01377D] rounded-3xl  p-2 justify-center items-center ${containerStyles}'}
    onPress={onPress}>
        <Text className='font-medium text-2xl text-white ${textStyles}'>{title}</Text>
    </TouchableOpacity>
    )
}

export default CustomButton;