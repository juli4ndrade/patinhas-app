import { View, Text, ImageBackground, Pressable} from "react-native";
import CustomButton from "@/src/components/customButton/customButton";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome6 } from "@expo/vector-icons";
import MenuButton from "@/src/components/menuButton/menuButton";

export default function Home() {
  return (
    <View>
      <View className="bg-white rounded-t-lg h-full">
        <ImageBackground
          className="h-[350px]"
          source={require("@/src/assets/home.png")}
        >
          <View className="pl-6 pt-[50px]">
            <MenuButton />
          </View>
          <View className="pt-[200px] pl-6">
            <Text className="text-white text-3xl font-semibold">
              Adotar é mais que um
            </Text>
            <Text className="text-white text-3xl font-semibold">
              ato de amor...
            </Text>
          </View>
        </ImageBackground>
        <View className="mt-10 px-10 flex gap-3">
          <CustomButton
            onPress={() => console.log("tap")}
            title="Quero Adotar"
          />
        </View>
        <ScrollView
          horizontal={true}
          className="mt-14 px-4 flex w-full h-[230px]"
        >
          <View className="flex mr-4 "></View>
          <View className="flex mr-4 ">
            <ImageBackground
              source={require("@/src/assets/dog2.png")}
              className="h-[202px] w-[170px]"
            >
              <Text className=" text-white text-lg mt-[160px] p-2">Teste</Text>
            </ImageBackground>
          </View>
          <View className="flex mr-4 ">
            <ImageBackground
              source={require("@/src/assets/cat1.png")}
              className="h-[202px] w-[170px]"
            >
              <Text className="text-white text-lg mt-[160px] p-2">Adoção</Text>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
