import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router, usePathname } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Text, View, Image, Pressable } from "react-native";
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { StyleSheet } from "react-native";
import { useEffect } from "react";

const CustomDrawerContent = (props: any) => {
  const pathname = usePathname();

  useEffect(() => {}, [pathname]);
  return (
    <DrawerContentScrollView {...props}>
      <View>
      <View  className="w-full h-[80px] pl-7 mb-7 flex flex-row gap-3 items-center ">
        <Pressable  className='flex flex-row items-center gap-3' onPress={() => {
          router.push('/(drawer)/(tabs)/perfil');
        }}>
        <Image source={require('@/src/assets/profile-user.png')} className="h-[50px] w-[50px] "/>
        <Text className="text-white text-lg font-semibold"> Fulana de Tal</Text>
        </Pressable>
      </View>
      <DrawerItem 
        label={'Home'}
        labelStyle={[styles.navItemLabel,
          { color: pathname == '/home' ? '#01377D' : '#fff'}]}
          style={{backgroundColor: pathname == '/home' ? '#fff' : '#01377D'}}
        onPress={() => {
          router.push('/(drawer)/(tabs)/home');
        }}
      />
      <DrawerItem 
        label={'Adoção'}
        labelStyle={[styles.navItemLabel,
          { color: pathname == '/adocao' ? '#01377D' : '#fff'}]}
          style={{backgroundColor: pathname == '/adocao' ? '#fff' : '#01377D'}}
        onPress={() => {
          router.push('/(drawer)/(tabs)/adocao');
        }}
      />
      <DrawerItem 
        label={'Sobre Nós'}
        labelStyle={[styles.navItemLabel,
          { color: pathname == '/sobre-nos' ? '#01377D' : '#fff'}]}
          style={{backgroundColor: pathname == '/sobre-nos' ? '#fff' : '#01377D'}}
        onPress={() => {
          router.push('/sobre-nos');
        }}
      />
      <DrawerItem 
        label={'Animal'}
        labelStyle={[styles.navItemLabel,
          { color: pathname == '/animal' ? '#01377D' : '#fff'}]}
          style={{backgroundColor: pathname == '/animal' ? '#fff' : '#01377D'}}
        onPress={() => {
          router.push('/animal');
        }}
      />
      </View>
      <View className=" mt-[400px] pl-[10px]">
      <DrawerItem
        label={'Login'}
        labelStyle={[styles.navItemLabel,
          { color: pathname == '/login' ? '#01377D' : '#fff'}]}
          style={{backgroundColor: pathname == '/login' ? '#fff' : '#01377D'}}
        onPress={() => {
          router.push('/login');
        }}
      />
      <DrawerItem
        label={'Cadastre-se'}
        labelStyle={[styles.navItemLabel,
          { color: pathname == '/cadatro' ? '#01377D' : '#fff'}]}
          style={{backgroundColor: pathname == '/cadastro' ? '#fff' : '#01377D'}}
        onPress={() => {
          router.push('/cadastro');
        }}
      />
      </View>
    </DrawerContentScrollView>
  );
};

export default function DrawerLayout() {
  return (
    <Drawer
      defaultStatus="closed"
      screenOptions={{ headerShown: false, 
        drawerStyle: { width: "75%",
        backgroundColor:"#01377D"
      } }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    />
  );
}

const styles = StyleSheet.create({
  navItemLabel: {
    color: '#fff',
    fontSize: 16,
    paddingLeft: 10

  },
  customNavItem:{
    color: '#fff',
    marginTop: 50,
    fontSize: 16,
  }
})

