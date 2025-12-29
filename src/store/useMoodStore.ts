import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface MoodEntry {
  id: string;
  moodId: string;
  timestamp: number;
  note?: string;
}

interface MoodState {
  entries: MoodEntry[];
  streak: number;
  addEntry: (entry: Omit<MoodEntry, 'id' | 'timestamp'>) => void;
}

export const useMoodStore = create<MoodState>()(
  persist(
    (set) => ({
      entries: [],
      streak: 0,
      addEntry: (entry) => set((state) => {
        const newEntry = {
          ...entry,
          id: Math.random().toString(36).substr(2, 9),
          timestamp: Date.now(),
        };
        // Simple streak logic placeholder
        const newStreak = state.streak + 1;
        return { entries: [newEntry, ...state.entries], streak: newStreak };
      }),
    }),
    {
      name: 'mood-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
