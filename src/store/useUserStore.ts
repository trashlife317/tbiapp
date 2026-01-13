import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserState {
  hasAcceptedDisclaimer: boolean;
  setHasAcceptedDisclaimer: (value: boolean) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      hasAcceptedDisclaimer: false,
      setHasAcceptedDisclaimer: (value) => set({ hasAcceptedDisclaimer: value }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
