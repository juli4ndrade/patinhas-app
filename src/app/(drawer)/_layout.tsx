import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Text } from "react-native";
import { DrawerContentComponentProps } from '@react-navigation/drawer';

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem 
        label={'Home'}
        onPress={() => {
          router.push('/(drawer)/(tabs)/home');
        }}
      />
      <DrawerItem 
        label={'Adoção'}
        onPress={() => {
          router.push('/(drawer)/(tabs)/adocao');
        }}
      />
      <DrawerItem 
        label={'Sobre Nós'}
        onPress={() => {
          router.push('/sobre-nos');
        }}
      />
      <DrawerItem 
        label={'Animal'}
        onPress={() => {
          router.push('/animal');
        }}
      />
      <DrawerItem
        label={'Login'}
        onPress={() => {
          router.push('/login');
        }}
      />
      <DrawerItem
        label={'Cadastre-se'}
        onPress={() => {
          router.push('/cadastro');
        }}
      />
    </DrawerContentScrollView>
  );
};

export default function DrawerLayout() {
  return (
    <Drawer
      defaultStatus="open"
      screenOptions={{ headerShown: true, 
        drawerStyle: { width: "75%",
        backgroundColor:"#01377D"
      } }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    />
  );
}
