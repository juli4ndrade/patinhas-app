import { Text } from "react-native";
import { View } from "react-native";

interface InfoAnimalProps {
    title: string
}

const InfoAnimal = ({
    title
}: InfoAnimalProps) => {
    return(
        <View className="flex items-center justify-center">
            <Text className=" font-semibold bg-[#01377d4c] text-[#013377]  p-1 px-3 text-center rounded-xl ">{title}</Text>
        </View>
        
    );
};

export default InfoAnimal;