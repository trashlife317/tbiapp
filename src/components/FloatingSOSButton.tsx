import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator, Alert } from 'react-native';
import { useSOSStore } from '../store/useSOSStore';

export const FloatingSOSButton = () => {
  const { triggerSOS, isSending } = useSOSStore();

  const handlePress = () => {
    Alert.alert(
      "Emergency SOS",
      "Are you sure you want to send an SOS alert?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "SEND HELP", style: "destructive", onPress: triggerSOS }
      ]
    );
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="absolute bottom-8 right-8 w-16 h-16 bg-red-500 rounded-full justify-center items-center shadow-lg z-50"
      activeOpacity={0.8}
    >
      {isSending ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text className="text-white font-bold text-xs">SOS</Text>
      )}
    </TouchableOpacity>
  );
};
