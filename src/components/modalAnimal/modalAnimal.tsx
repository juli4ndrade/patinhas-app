import {
  View,
  Text,
  Image,
  Modal,
  ImageBackground,
  Pressable,
  StyleSheet,
} from "react-native";

interface ModalAnimalProps {
  title: string;
  subtitle: string;
  photo: any;
}

const ModalAnimal = ({ title, subtitle, photo }: ModalAnimalProps) => {
  return (
    <View className="flex flex-col  justify-center w-[350px]">
      1
      <Modal visible={true} transparent={true}>
        <View className="w-[400px] h-[250px] bg-white rounded-xl">
          <Image source={photo} className="w-full h-[150px]" />
          <Text className="p-5">{title}</Text>
        </View>
      </Modal>
      <View className="flex mr-4 ">
        <ImageBackground
          source={photo}
          className="h-[202px] w-[170px]"
        >
          <Text className=" text-white text-lg mt-[160px] p-2">{subtitle}</Text>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

export default ModalAnimal;
