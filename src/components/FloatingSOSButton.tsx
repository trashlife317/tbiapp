import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import * as Location from 'expo-location';
import { theme } from '../theme/theme';
import { useSOSStore } from '../store/useSOSStore';
import * as Haptics from 'expo-haptics';

export const FloatingSOSButton = () => {
  const router = useRouter();
  const activateSOS = useSOSStore(state => state.activateSOS);

  const handlePress = async () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);

    Alert.alert(
      "Emergency SOS",
      "Are you sure you want to activate SOS? This will alert your emergency contacts with your location.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "YES, ACTIVATE",
          style: "destructive",
          onPress: async () => {
            activateSOS();

            try {
              let { status } = await Location.requestForegroundPermissionsAsync();
              if (status !== 'granted') {
                Alert.alert('Permission to access location was denied');
                return;
              }

              let location = await Location.getCurrentPositionAsync({});
              const { latitude, longitude } = location.coords;
              Alert.alert(
                "SOS Activated",
                `Help is on the way. Your contacts have been notified.\nLocation: ${latitude.toFixed(4)}, ${longitude.toFixed(4)}`
              );
            } catch (error) {
              console.error(error);
              Alert.alert("SOS Activated", "Help is on the way. (Location could not be retrieved)");
            }
          }
        }
      ]
    );
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress} activeOpacity={0.8}>
      <Text style={styles.text}>SOS</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.status.error,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    zIndex: 999,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  }
});
