import { Stack } from 'expo-router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Platform } from 'react-native';

import AuthContextProvider from '../providers/AuthContext';
import {useEffect} from "react";
import Purchases from "react-native-purchases";

const client = new QueryClient();

export default function RootLayout() {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      Purchases.configure({apiKey: process.env.EXPO_PUBLIC_RS_IOS});
    } else if (Platform.OS === 'android') {
      Purchases.configure({apiKey: process.env.EXPO_PUBLIC_RS_IOS});
    }
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthContextProvider>
        <QueryClientProvider client={client}>
          <Stack>
            <Stack.Screen name="index" options={{ title: 'Exercises' }} />
          </Stack>
        </QueryClientProvider>
      </AuthContextProvider>
    </GestureHandlerRootView>
  );
}
