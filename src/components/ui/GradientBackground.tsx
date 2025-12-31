import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../theme/theme';

interface GradientBackgroundProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const GradientBackground = ({ children, style }: GradientBackgroundProps) => {
  return (
    <LinearGradient
      colors={[theme.colors.background, '#FFE0B2', theme.colors.background]} // Peach/Gold hint
      style={[styles.container, style]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
