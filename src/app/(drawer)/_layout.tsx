import { DrawerContent } from '@/src/components/drawer-content'
import {Drawer} from 'expo-router/drawer'

export default function DrawerLayout() {
  return (
    <Drawer 
    defaultStatus='open'
    screenOptions={{
      headerShown: false,
      drawerStyle: {
        width: '75%'
      },
    }}
    drawerContent={()=> <DrawerContent/>}
    >
        <Drawer.Screen name='(tabs)'/>
    </Drawer>
  )
}