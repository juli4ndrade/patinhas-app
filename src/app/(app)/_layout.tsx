import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(auth)',
};

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          presentation: 'modal',
          headerShown: false,
          headerTitle: 'Login',

        }}
      />
      <Stack.Screen
      name='cadastro'
      options={{
        headerTitle: 'Cadastro',
        headerStyle: {
            backgroundColor: '#01377D',
        },
        headerTitleStyle: {
            fontSize: 26,
            fontWeight: '600'
        },
        headerTintColor: '#fff',
        headerBackTitleVisible: false,

      }}
      />
    </Stack>
  );
}
