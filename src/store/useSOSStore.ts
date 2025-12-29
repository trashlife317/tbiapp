import { create } from 'zustand';

interface SOSState {
  isActive: boolean;
  contacts: string[];
  activateSOS: () => void;
  deactivateSOS: () => void;
  addContact: (contact: string) => void;
}

export const useSOSStore = create<SOSState>((set) => ({
  isActive: false,
  contacts: [],
  activateSOS: () => set({ isActive: true }),
  deactivateSOS: () => set({ isActive: false }),
  addContact: (contact) => set((state) => ({ contacts: [...state.contacts, contact] })),
}));
