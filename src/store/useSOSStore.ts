import { create } from 'zustand';

interface SOSState {
  isActive: boolean;
  contacts: string[];
  lastLocation: { lat: number; lng: number } | null;
  activateSOS: () => void;
  deactivateSOS: () => void;
  addContact: (contact: string) => void;
  setLastLocation: (lat: number, lng: number) => void;
}

export const useSOSStore = create<SOSState>((set) => ({
  isActive: false,
  contacts: [],
  lastLocation: null,
  activateSOS: () => set({ isActive: true }),
  deactivateSOS: () => set({ isActive: false }),
  addContact: (contact) => set((state) => ({ contacts: [...state.contacts, contact] })),
  setLastLocation: (lat, lng) => set({ lastLocation: { lat, lng } }),
}));
