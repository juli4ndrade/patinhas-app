import '../styles/global.css'
import { Slot } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';


export default function RootLayout() {
  
  SplashScreen.preventAutoHideAsync();

  return (
<GestureHandlerRootView>

<Slot/>

</GestureHandlerRootView>
    
  );
}
