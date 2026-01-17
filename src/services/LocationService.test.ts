import { LocationService } from './LocationService';
import * as Location from 'expo-location';

// Mock expo-location
jest.mock('expo-location', () => ({
  requestForegroundPermissionsAsync: jest.fn(),
  getCurrentPositionAsync: jest.fn(),
  reverseGeocodeAsync: jest.fn(),
  Accuracy: {
    High: 5,
  },
}));

describe('LocationService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should request permissions and return true if granted', async () => {
    (Location.requestForegroundPermissionsAsync as jest.Mock).mockResolvedValue({ status: 'granted' });
    const result = await LocationService.requestPermissions();
    expect(result).toBe(true);
    expect(Location.requestForegroundPermissionsAsync).toHaveBeenCalled();
  });

  it('should request permissions and return false if denied', async () => {
    (Location.requestForegroundPermissionsAsync as jest.Mock).mockResolvedValue({ status: 'denied' });
    const result = await LocationService.requestPermissions();
    expect(result).toBe(false);
  });

  it('should get current location if permission granted', async () => {
    (Location.requestForegroundPermissionsAsync as jest.Mock).mockResolvedValue({ status: 'granted' });
    (Location.getCurrentPositionAsync as jest.Mock).mockResolvedValue({
      coords: { latitude: 123, longitude: 456 },
      timestamp: 1000,
    });
    (Location.reverseGeocodeAsync as jest.Mock).mockResolvedValue([{
      streetNumber: '123',
      street: 'Main St',
      city: 'Test City',
    }]);

    const result = await LocationService.getCurrentLocation();

    expect(result).toEqual({
      latitude: 123,
      longitude: 456,
      timestamp: 1000,
      address: '123, Main St, Test City',
    });
  });

  it('should throw error if permission denied', async () => {
    (Location.requestForegroundPermissionsAsync as jest.Mock).mockResolvedValue({ status: 'denied' });

    await expect(LocationService.getCurrentLocation()).rejects.toThrow('Location permission denied');
  });
});
