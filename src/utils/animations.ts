// TBI Link - Animation Presets
import { withSpring, withTiming, Easing } from 'react-native-reanimated';

export const animations = {
  press: {
    in: { scale: 0.95 },
    out: { scale: 1 },
    config: { damping: 10, stiffness: 100 },
  },
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    duration: 300,
  },
  spring: (toValue: number) => withSpring(toValue, { damping: 10, stiffness: 100 }),
  timing: (toValue: number, duration: number = 300) => withTiming(toValue, { duration, easing: Easing.inOut(Easing.ease) }),
};
