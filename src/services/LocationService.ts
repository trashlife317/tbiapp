import * as Location from 'expo-location';

export interface LocationData {
  latitude: number;
  longitude: number;
  address?: string;
  timestamp: number;
}

export class LocationService {
  static async requestPermissions(): Promise<boolean> {
    const { status } = await Location.requestForegroundPermissionsAsync();
    return status === 'granted';
  }

  static async getCurrentLocation(): Promise<LocationData | null> {
    try {
      const hasPermission = await this.requestPermissions();
      if (!hasPermission) {
        throw new Error('Location permission denied');
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      let addressString = undefined;
      try {
        const address = await Location.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });

        if (address && address.length > 0) {
            const addr = address[0];
            // Construct a readable address string
            const parts = [
                addr.streetNumber,
                addr.street,
                addr.city,
                addr.region,
                addr.postalCode,
                addr.country
            ].filter(Boolean);

            addressString = parts.join(', ');
        }
      } catch (e) {
          // Ignore geocoding errors
          console.warn('Geocoding failed', e);
      }

      return {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        timestamp: location.timestamp,
        address: addressString,
      };
    } catch (error) {
      console.error('Error getting location:', error);
      throw error;
    }
  }
}
