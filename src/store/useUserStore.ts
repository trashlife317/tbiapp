import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserState {
  role: 'survivor' | 'caregiver' | null;
  name: string;
  hasOnboarded: boolean;
  setRole: (role: 'survivor' | 'caregiver') => void;
  setName: (name: string) => void;
  completeOnboarding: () => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      role: null,
      name: '',
      hasOnboarded: false,
      setRole: (role) => set({ role }),
      setName: (name) => set({ name }),
      completeOnboarding: () => set({ hasOnboarded: true }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
