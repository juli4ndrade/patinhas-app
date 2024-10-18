import { FontAwesome6 } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

export default function MenuButton(){
    const navigation = useNavigation()
    const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer)
    return(
        <Pressable onPress={toggleMenu}>
        <FontAwesome6 name="bars" size={22} color="#fff" />
        </Pressable>
    )
}