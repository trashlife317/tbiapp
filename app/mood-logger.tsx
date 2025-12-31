import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { theme } from '../src/theme/theme';
import { MoodEmoji } from '../src/components/MoodEmoji';
import { Input } from '../src/components/ui/Input';
import { Button } from '../src/components/ui/Button';
import { MOODS } from '../src/utils/constants';
import { useMoodStore } from '../src/store/useMoodStore';

export default function MoodLogger() {
  const router = useRouter();
  const addEntry = useMoodStore(state => state.addEntry);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [note, setNote] = useState('');

  const handleSave = () => {
    if (selectedMood) {
      addEntry({
        moodId: selectedMood,
        note: note.trim(),
      });
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How are you feeling?</Text>

      <View style={styles.grid}>
        {MOODS.map((mood) => (
          <MoodEmoji
            key={mood.id}
            emoji={mood.emoji}
            label={mood.label}
            selected={selectedMood === mood.id}
            onPress={() => setSelectedMood(mood.id)}
          />
        ))}
      </View>

      <View style={styles.inputContainer}>
        <Input
          placeholder="Add a note (optional)..."
          multiline
          numberOfLines={4}
          value={note}
          onChangeText={setNote}
          style={{ height: 100, textAlignVertical: 'top' }}
        />
      </View>

      <Button
        title="Save Entry"
        onPress={handleSave}
        disabled={!selectedMood}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: theme.colors.background,
  },
  title: {
    ...theme.typography.h2,
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 30,
  },
  inputContainer: {
    marginBottom: 20,
  },
  button: {
    marginTop: 'auto',
  },
});
