import React, { memo, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import { theme } from '../../theme/theme';

interface AvatarProps {
  uri?: string;
  size?: number;
  showHeartbeat?: boolean;
}

export const Avatar = memo(({ uri, size = 50, showHeartbeat = false }: AvatarProps) => {
  const scale = useSharedValue(1);

  useEffect(() => {
    if (showHeartbeat) {
      scale.value = withRepeat(
        withSequence(
          withTiming(1.1, { duration: 500 }),
          withTiming(1, { duration: 500 })
        ),
        -1,
        true
      );
    } else {
      scale.value = 1;
    }
  }, [showHeartbeat]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View style={[
      styles.container,
      { width: size, height: size, borderRadius: size / 2 },
      animatedStyle
    ]}>
      <Image
        source={{ uri: uri || 'https://via.placeholder.com/150' }}
        style={{ width: size, height: size, borderRadius: size / 2 }}
      />
      {showHeartbeat && (
        <View style={styles.badge} />
      )}
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  container: {
    overflow: 'visible',
  },
  badge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.status.success,
    borderWidth: 2,
    borderColor: '#fff',
  }
});
