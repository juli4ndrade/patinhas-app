import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import InfoAnimal from "@/src/components/infoAnimal/infoAnimal";
import CustomButton from "@/src/components/customButton/customButton";
import MenuButton from "@/src/components/menuButton/menuButton";

export default function Home() {
  return (
    <ScrollView className="bg-white">
      <View >
        <ImageBackground className=" h-[350px] w-full" source={require("@/src/assets/cat2.png")}>
          <View className="pl-6 pt-[50px]">
            <MenuButton/>
          </View>
          </ImageBackground>
      </View>
      <View className="flex m-5">
        <Text className="text-[#01377D] text-4xl font-bold mb-2 ">Zeca</Text>
        <Text>Gato | Macho | Pequeno Porte</Text>
        <View className="mt-5">
          <View className="flex flex-row h-10 items-center px-1 gap-2">
            <FontAwesome6 name="location-dot" size={20} color="#7FD349" />
            <Text>Está em Barueri, São Paulo</Text>
          </View>
          <View className="flex flex-row h-10 items-center px-1 gap-1">
            <FontAwesome6 name="user-large" size={18} color="#7FD349" />
            <Text>
              {" "}
              Publicado por{" "}
              <Text className="text-[#7fd349]">Ana de Fátima Moreira</Text>
            </Text>
          </View>
        </View>
        <View>
          <Text className="text-[#7fd349] text-xl font-bold mb-2 mt-5">
            História de Zeca
          </Text>
          <Text>
            Zeca é um gato jovem, de aproximadamente 1 ano, cheio de energia e
            carisma. Resgatado das ruas, ele está em busca de um lar amoroso
            para chamar de seu. Castrado, vacinado e saudável, Zeca é um
            companheiro brincalhão e afetuoso, pronto para alegrar a vida de sua
            futura família. Se você está pronto para receber amor incondicional,
            Zeca está pronto para conquistar seu coração.
          </Text>
        </View>
        <View>
          <Text className="text-[#7fd349] text-2xl font-bold mb-4 mt-4">
            Mais detalhes sobre Zeca
          </Text>
          <View className="flex flex-row items-center flex-wrap gap-3 mb-8">
            <InfoAnimal title="Dócil" />
            <InfoAnimal title="Vermifugado" />
            <InfoAnimal title="Brincalhão" />
            <InfoAnimal title="Castrado" />
            <InfoAnimal title="Vacinado" />
            <InfoAnimal title="Sociável" />
          </View>
          <View className="">
            <CustomButton
              onPress={() => console.log("tap")}
              title="Quero Adotar"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  formContainer: {},
});
