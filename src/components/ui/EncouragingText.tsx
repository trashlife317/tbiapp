import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, ViewStyle } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { theme } from '../../theme/theme';
import { ENCOURAGING_MESSAGES } from '../../utils/constants';

interface EncouragingTextProps {
  style?: ViewStyle;
}

export const EncouragingText = ({ style }: EncouragingTextProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ENCOURAGING_MESSAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Animated.View
      key={index}
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}
      style={style}
    >
      <Text style={styles.text}>{ENCOURAGING_MESSAGES[index]}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: theme.colors.text.secondary,
    fontStyle: 'italic',
    textAlign: 'center',
    fontSize: 14,
  },
});
