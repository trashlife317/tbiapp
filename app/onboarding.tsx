import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../src/components/ui/Button';
import { GradientBackground } from '../src/components/ui/GradientBackground';
import { theme } from '../src/theme/theme';
import { useUserStore } from '../src/store/useUserStore';
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const SLIDES = [
  {
    title: "Welcome to TBI Link",
    description: "A safe space for survivors and caregivers to connect, heal, and grow together.",
  },
  {
    title: "Track Your Journey",
    description: "Log your moods, celebrate small wins, and see your progress over time.",
  },
  {
    title: "You Are Not Alone",
    description: "Find your community. Connect with people who truly understand.",
  }
];

export default function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const setRole = useUserStore(state => state.setRole);
  const completeOnboarding = useUserStore(state => state.completeOnboarding);

  const handleNext = () => {
    if (currentSlide < SLIDES.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handleRoleSelect = (role: 'survivor' | 'caregiver') => {
    setRole(role);
    completeOnboarding();
    router.replace('/(tabs)/home');
  };

  return (
    <GradientBackground style={styles.container}>
      <View style={styles.content}>
        {currentSlide < SLIDES.length ? (
          <Animated.View
            key={currentSlide}
            entering={FadeInRight}
            exiting={FadeOutLeft}
            style={styles.slide}
          >
            <Text style={styles.title}>{SLIDES[currentSlide].title}</Text>
            <Text style={styles.description}>{SLIDES[currentSlide].description}</Text>
          </Animated.View>
        ) : (
          <Animated.View entering={FadeInRight} style={styles.slide}>
            <Text style={styles.title}>Who are you?</Text>
            <Text style={styles.description}>Tell us a bit about yourself so we can personalize your experience.</Text>
            <View style={styles.roleContainer}>
              <Button
                title="I'm a Survivor"
                onPress={() => handleRoleSelect('survivor')}
                style={styles.roleButton}
              />
              <Button
                title="I'm a Caregiver"
                onPress={() => handleRoleSelect('caregiver')}
                variant="secondary"
                style={styles.roleButton}
              />
            </View>
          </Animated.View>
        )}
      </View>

      <View style={styles.footer}>
        {currentSlide < SLIDES.length && (
          <Button title="Next" onPress={handleNext} size="l" />
        )}
      </View>
    </GradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    alignItems: 'center',
    width: width - 40,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.text.secondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  roleContainer: {
    marginTop: 40,
    width: '100%',
    gap: 16,
  },
  roleButton: {
    width: '100%',
  },
  footer: {
    paddingBottom: 40,
    alignItems: 'center',
  },
});
