import { create } from 'zustand';

interface UserState {
  role: 'survivor' | 'caregiver' | null;
  name: string;
  hasOnboarded: boolean;
  setRole: (role: 'survivor' | 'caregiver') => void;
  setName: (name: string) => void;
  completeOnboarding: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  role: null,
  name: '',
  hasOnboarded: false,
  setRole: (role) => set({ role }),
  setName: (name) => set({ name }),
  completeOnboarding: () => set({ hasOnboarded: true }),
}));
