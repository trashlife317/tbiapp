import { act } from '@testing-library/react-native';
import { useMoodStore } from './useMoodStore';

describe('useMoodStore', () => {
  it('adds a mood entry correctly', () => {
    const { addEntry } = useMoodStore.getState();
    const entryData = {
      moodId: 'happy',
      note: 'Feeling good!',
    };

    act(() => {
      addEntry(entryData);
    });

    const { entries, streak } = useMoodStore.getState();

    expect(entries.length).toBe(1);
    expect(entries[0].moodId).toBe('happy');
    expect(entries[0].note).toBe('Feeling good!');
    expect(streak).toBe(1);
  });
});
