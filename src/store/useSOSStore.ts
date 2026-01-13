import { create } from 'zustand';
import { LocationService, LocationData } from '../services/LocationService';

interface SOSState {
  isActive: boolean;
  isSending: boolean;
  location: LocationData | null;
  error: string | null;
  triggerSOS: () => Promise<void>;
  cancelSOS: () => void;
  reset: () => void;
}

export const useSOSStore = create<SOSState>((set) => ({
  isActive: false,
  isSending: false,
  location: null,
  error: null,

  triggerSOS: async () => {
    set({ isSending: true, error: null, isActive: true });
    try {
      const location = await LocationService.getCurrentLocation();
      set({ location, isSending: false });
      // In a real app, we would send this data to a backend here.
      console.log('SOS triggered with location:', location);
    } catch (error: any) {
      set({ error: error.message || 'Failed to get location', isSending: false });
    }
  },

  cancelSOS: () => {
    set({ isActive: false, isSending: false, location: null, error: null });
  },

  reset: () => {
    set({ isActive: false, isSending: false, location: null, error: null });
  }
}));
