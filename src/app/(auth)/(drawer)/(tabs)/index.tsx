import { Text, View, ScrollView} from "react-native";

import Constants from 'expo-constants';

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{flex: 1}} 
    className="" 
    showsHorizontalScrollIndicator={false}>

    <View className="w-full px-4" style={{marginTop: statusBarHeight + 8 }}>
      <Text> OLA!</Text>
    </View>
    </ScrollView>
  );
}
