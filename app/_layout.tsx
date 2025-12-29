import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ErrorBoundary } from '../src/components/ErrorBoundary';
import { FloatingSOSButton } from '../src/components/FloatingSOSButton';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <StatusBar style="auto" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="onboarding" options={{ gestureEnabled: false }} />
          <Stack.Screen name="(tabs)" options={{ gestureEnabled: false }} />
          <Stack.Screen name="chat/[id]" options={{ presentation: 'card', headerShown: true, title: 'Chat' }} />
          <Stack.Screen name="mood-logger" options={{ presentation: 'modal' }} />
        </Stack>
        <FloatingSOSButton />
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}
