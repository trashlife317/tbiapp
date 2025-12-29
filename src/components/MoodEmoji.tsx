import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { theme } from '../theme/theme';

interface MoodEmojiProps {
  emoji: string;
  label: string;
  selected?: boolean;
  onPress: () => void;
}

export const MoodEmoji = ({ emoji, label, selected, onPress }: MoodEmojiProps) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    backgroundColor: selected ? theme.colors.peach : theme.colors.ui.card,
  }));

  const handlePressIn = () => {
    scale.value = withSpring(0.9);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
    onPress();
  };

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <TouchableOpacity
        activeOpacity={1}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={styles.button}
      >
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.borderRadius.m,
    margin: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
  },
  emoji: {
    fontSize: 32,
    marginBottom: 4,
  },
  label: {
    fontSize: 12,
    color: theme.colors.text.secondary,
  },
  selectedLabel: {
    color: '#fff',
    fontWeight: 'bold',
  }
});
