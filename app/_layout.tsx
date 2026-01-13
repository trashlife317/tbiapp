import { Stack } from 'expo-router';
import { MedicalDisclaimer } from '../src/components/MedicalDisclaimer';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <MedicalDisclaimer />
    </>
  );
}
