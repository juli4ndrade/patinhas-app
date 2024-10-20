import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  SafeAreaView,
  ImageBackground,
  Modal,
  TouchableOpacity,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import InfoAnimal from "@/src/components/infoAnimal/infoAnimal";
import CustomButton from "@/src/components/customButton/customButton";
import MenuButton from "@/src/components/menuButton/menuButton";
import { useState } from "react";

export default function Animal() {

  const [isModalVisible, setIsModalVisible] = useState(false);

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
          <View>
            <CustomButton
              onPress={() => setIsModalVisible(true)}
              title="Quero Adotar"
            />
            <Modal 
            visible={isModalVisible}
            animationType="fade"
            transparent={true}
            onRequestClose={() => setIsModalVisible(false)}
            >
              <View style={style.outerView}>
                <View style={style.modalView}>
                <View className="flex flex-row items-center gap-2 pt-3 pb-5">
                <FontAwesome6 name="message" size={20} color="#7FD349"/>
                  <Text className="font-semibold">
                    Quer Adotar?
                  </Text>
                </View>
                <Text>
                Para adotar esse pet ou saber mais sobre ele, entre em contato com o protetor:
                </Text>
               <View className="flex flex-row items-center gap-2 pt-5 mb-2">
               <FontAwesome6 name="envelope" size={20} color="#7FD349"/>
               <Text>fulano@gmail.com</Text>
               </View>
                <View className="flex flex-row items-center gap-2 pb-7">
                  <FontAwesome6 name="whatsapp" size={22} color="#7FD349"/>
                <Text>(11) 99999-9999</Text>
                </View>
                <View className="flex justify-center items-center mt-5">
                <TouchableOpacity className=" bg-white border-[#7FD349] border-2 rounded-xl w-[80px] h-[30px] flex justify-center items-center"
                onPress={() => setIsModalVisible(false)} >
                  <Text className="text-[#7FD349] text-center"> Sair</Text>
                </TouchableOpacity>
                </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  outerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 30,
    padding: 20,
    width: 300,
    alignContent: "center",
  } 
});
