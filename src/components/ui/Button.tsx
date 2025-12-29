import React, { memo } from 'react';
import { TouchableOpacity, Text, ActivityIndicator, StyleSheet, TouchableOpacityProps } from 'react-native';
import { theme } from '../../theme/theme';
import { animations } from '../../utils/animations';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 's' | 'm' | 'l';
  loading?: boolean;
  icon?: React.ReactNode;
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

export const Button = memo(({
  title,
  variant = 'primary',
  size = 'm',
  loading,
  icon,
  style,
  ...props
}: ButtonProps) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = animations.spring(0.95);
  };

  const handlePressOut = () => {
    scale.value = animations.spring(1);
  };

  const getBackgroundColor = () => {
    switch (variant) {
      case 'primary': return theme.colors.peach;
      case 'secondary': return theme.colors.teal;
      case 'outline': return 'transparent';
      case 'ghost': return 'transparent';
      default: return theme.colors.peach;
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'outline': return theme.colors.peach;
      case 'ghost': return theme.colors.text.secondary;
      default: return '#FFFFFF';
    }
  };

  const getPadding = () => {
    switch (size) {
      case 's': return 8;
      case 'l': return 20;
      default: return 14;
    }
  };

  return (
    <AnimatedTouchable
      activeOpacity={0.8}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        styles.button,
        {
          backgroundColor: getBackgroundColor(),
          padding: getPadding(),
          borderWidth: variant === 'outline' ? 2 : 0,
          borderColor: theme.colors.peach,
        },
        animatedStyle,
        style
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <>
          {icon}
          <Text style={[styles.text, { color: getTextColor() }]}>{title}</Text>
        </>
      )}
    </AnimatedTouchable>
  );
});

const styles = StyleSheet.create({
  button: {
    borderRadius: theme.borderRadius.m,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
});
