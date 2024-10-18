import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import React from "react";
import InfoSobreNos from "@/src/components/infoSobreNos/infoSobreNos";
import Header from "@/src/components/header/header";

export default function SobreNos() {
  return (
    <ScrollView className="flex-1">
      <Header title="Sobre Nós" />
      <View className=" mt-10">
        <Text className="text-3xl text-[#01377d] font-semibold pl-8">
          Sobre Nós
        </Text>
        <View className="flex items-center">
          <InfoSobreNos
            title=""
            subtitle="Amigos de Patinha é um sistema criado para adoção e doação de animais domésticos, com o objetivo de simplificar o processo, tornando-o mais transparente. O sistema permite que doadores publiquem informações sobre os animais e que potenciais adotantes as visualizem, interagindo de forma segura e ágil."
          />
          <InfoSobreNos
            title=""
            subtitle="A ideia de criar uma plataforma dedicada exclusivamente a essa finalidade surgiu da necessidade de tratar a adoção de forma simples e responsável. Ter um pet traz amor e alegria, aliviando o estresse e proporcionando companhia fiel."
          />
          <View className=" mt-10">
            <Image
              source={require("@/src/assets/gato-2.jpg")}
              style={styles.fotoSobre2}
            />
          </View>
        </View>
        <Text className="text-3xl text-[#01377d] font-semibold pl-8 mt-[70px] mb-5">
          Nossa Missão
        </Text>
        <View className="flex items-center">
          <InfoSobreNos title="" subtitle="Nossa missão é promover o bem-estar animal facilitando o processo de adoção através de uma plataforma web e mobile acessível, segura e eficiente. Buscamos conectar doadores e adotantes de maneira rápida e transparente, contribuindo para que mais animais encontrem lares amorosos."/>
          <InfoSobreNos title="" subtitle="Acreditamos que a tecnologia pode ser uma poderosa aliada para simplificar a comunicação entre quem deseja doar e quem busca adotar, proporcionando uma experiência satisfatória para ambos. Com o uso de ferramentas modernas e inovadoras, nos comprometemos a criar um ambiente digital intuitivo, capaz de transformar a realidade da adoção de animais, promovendo o respeito e cuidado com a vida animal."/>
          <InfoSobreNos title="" subtitle="Nosso objetivo final é impactar positivamente a sociedade, facilitando e incentivando a adoção responsável, contribuindo para reduzir o número de animais abandonados e garantindo que cada um deles encontre um lar onde possa ser cuidado e amado."/>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  fotoSobre2: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderColor: "#b6ccc3",
    borderWidth: 15,
  },
});
