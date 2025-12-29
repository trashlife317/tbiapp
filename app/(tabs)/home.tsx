import React, { useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { theme } from '../../src/theme/theme';
import { EncouragingText } from '../../src/components/ui/EncouragingText';
import { Card } from '../../src/components/ui/Card';
import { Avatar } from '../../src/components/ui/Avatar';
import { useUserStore } from '../../src/store/useUserStore';
import { formatRelativeTime } from '../../src/utils/helpers';
import * as Haptics from 'expo-haptics';

export default function HomeScreen() {
  const router = useRouter();
  const userName = useUserStore(state => state.name) || 'Friend';

  const handleMoodCheckIn = useCallback(() => {
    Haptics.selectionAsync();
    router.push('/mood-logger');
  }, [router]);

  const feedItems = useMemo(() => [
    { id: 1, type: 'win', text: 'Walked for 10 minutes today!', time: Date.now() - 3600000 },
    { id: 2, type: 'mood', text: 'Feeling calm today.', time: Date.now() - 7200000 },
  ], []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning,</Text>
          <Text style={styles.name}>{userName}</Text>
        </View>
        <Avatar showHeartbeat />
      </View>

      <EncouragingText style={styles.encouragement} />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={handleMoodCheckIn}>
          <Card style={styles.moodCard}>
            <Text style={styles.moodTitle}>How are you feeling today?</Text>
            <Text style={styles.moodSubtitle}>Tap to check in</Text>
          </Card>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>Your Journey</Text>

        {feedItems.map(item => (
          <Card key={item.id} style={styles.feedItem}>
            <View style={styles.feedHeader}>
              <Text style={styles.feedType}>{item.type === 'win' ? '🎉 Win' : '😊 Update'}</Text>
              <Text style={styles.feedTime}>{formatRelativeTime(item.time)}</Text>
            </View>
            <Text style={styles.feedText}>{item.text}</Text>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 16,
    color: theme.colors.text.secondary,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text.primary,
  },
  encouragement: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  moodCard: {
    backgroundColor: theme.colors.gold,
    marginBottom: 30,
    alignItems: 'center',
    paddingVertical: 24,
  },
  moodTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.colors.text.primary,
    marginBottom: 8,
  },
  moodSubtitle: {
    fontSize: 14,
    color: theme.colors.text.secondary,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: theme.colors.text.primary,
  },
  feedItem: {
    marginBottom: 16,
  },
  feedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  feedType: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  feedTime: {
    color: theme.colors.text.light,
    fontSize: 12,
  },
  feedText: {
    fontSize: 16,
    color: theme.colors.text.primary,
  },
});
