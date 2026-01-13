import React from 'react';
import { View, Text, Button } from 'react-native';
import { FloatingSOSButton } from '../src/components/FloatingSOSButton';
import { useSOSStore } from '../src/store/useSOSStore';

export default function SOSDemo() {
  const { location, error, isActive, isSending, cancelSOS } = useSOSStore();

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">SOS Demo</Text>

      <View className="bg-white p-6 rounded-xl shadow-sm w-full mb-8">
        <Text className="text-lg font-semibold mb-2">Status:</Text>
        <Text className="mb-2">Active: {isActive ? 'Yes' : 'No'}</Text>
        <Text className="mb-2">Sending: {isSending ? 'Yes' : 'No'}</Text>

        {error && (
            <Text className="text-red-500 mb-2">Error: {error}</Text>
        )}

        {location && (
          <View>
            <Text className="font-semibold mt-2">Location Acquired:</Text>
            <Text>Lat: {location.latitude}</Text>
            <Text>Long: {location.longitude}</Text>
            {location.address && <Text>Address: {location.address}</Text>}
          </View>
        )}
      </View>

      {isActive && (
          <Button title="Reset / Cancel SOS" onPress={cancelSOS} color="red" />
      )}

      <FloatingSOSButton />
    </View>
  );
}
