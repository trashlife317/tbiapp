import React, { memo } from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { theme } from '../../theme/theme';

interface CardProps extends ViewProps {
  variant?: 'elevated' | 'outlined' | 'flat';
}

export const Card = memo(({ children, style, variant = 'elevated', ...props }: CardProps) => {
  return (
    <View
      style={[
        styles.card,
        variant === 'elevated' && styles.elevated,
        variant === 'outlined' && styles.outlined,
        style
      ]}
      {...props}
    >
      {children}
    </View>
  );
});

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.ui.card,
    borderRadius: theme.borderRadius.m,
    padding: theme.spacing.m,
  },
  elevated: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  outlined: {
    borderWidth: 1,
    borderColor: theme.colors.ui.border,
  },
});
