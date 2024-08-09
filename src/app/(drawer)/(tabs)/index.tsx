import { Text, View, ScrollView} from "react-native";
import { Header } from "@/src/components/header";

import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{flex: 1}} 
    className="bg-slate-200" 
    showsHorizontalScrollIndicator={false}>

    <View className="w-full px-4" style={{marginTop: statusBarHeight + 8 }}>
      <Header/>
    </View>
    </ScrollView>
  );
}
