import { View, Text,Image} from "react-native";
import MenuButton from "../menuButton/menuButton";

interface CardAdocaoProps {
    title: string,
    subtitle: string,
    picture: string,

}
const CardAdocao = ({
    title,
    subtitle,
    picture,

}: CardAdocaoProps) => {
  return (
    <View className="flex items-center flex-row gap-10 bg-[#01377d] w-full h-[100px] pt-[50px] pl-6 pb-2">
        <MenuButton/>
        <Text className="text-white text-3xl font-semibold">{title}</Text>
    </View>
  );
};


export default CardAdocao;