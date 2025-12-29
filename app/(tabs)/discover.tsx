import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { theme } from '../../src/theme/theme';
import { Card } from '../../src/components/ui/Card';
import { Avatar } from '../../src/components/ui/Avatar';
import { Button } from '../../src/components/ui/Button';

const SUGGESTED_PEERS = [
  { id: '1', name: 'Alex M.', role: 'Survivor', injury: 'Concussion', interests: ['Art', 'Hiking'] },
  { id: '2', name: 'Jordan T.', role: 'Caregiver', injury: 'Partner TBI', interests: ['Reading', 'Coffee'] },
  { id: '3', name: 'Casey R.', role: 'Survivor', injury: 'Severe TBI', interests: ['Music', 'Gaming'] },
];

export default function DiscoverScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Discover</Text>
      <Text style={styles.subtitle}>Connect with people who understand.</Text>

      <FlatList
        data={SUGGESTED_PEERS}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <View style={styles.header}>
              <Avatar size={60} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.role}>{item.role} • {item.injury}</Text>
              </View>
              <Button title="Connect" size="s" variant="outline" />
            </View>
            <View style={styles.interests}>
              {item.interests.map((interest, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>{interest}</Text>
                </View>
              ))}
            </View>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: 60,
  },
  title: {
    ...theme.typography.h1,
    paddingHorizontal: 20,
    marginBottom: 4,
    color: theme.colors.text.primary,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.text.secondary,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  list: {
    paddingHorizontal: 20,
  },
  card: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  info: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text.primary,
  },
  role: {
    fontSize: 14,
    color: theme.colors.text.secondary,
    marginTop: 4,
  },
  interests: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: theme.colors.background,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors.ui.border,
  },
  tagText: {
    fontSize: 12,
    color: theme.colors.text.secondary,
  },
});
