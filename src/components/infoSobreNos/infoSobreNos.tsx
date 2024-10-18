import { View, Text,Image} from "react-native";

interface InfoSobreProps {
    title: string,
    subtitle: string,

}
const InfoSobreNos = ({
    title,
    subtitle
}: InfoSobreProps) => {
  return (
    <View className="flex flex-col  justify-center w-[350px]">
        <Text className=" text-3xl font-semibold  text-[#01377d]">{title}</Text>
        <Text className="text-lg text-[#252525] ">{subtitle}</Text>
    </View>
  );
};


export default InfoSobreNos;
