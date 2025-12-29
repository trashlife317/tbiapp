import React from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import { theme } from '../../src/theme/theme';
import { Card } from '../../src/components/ui/Card';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Accessibility</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Dark Mode</Text>
            <Switch value={false} />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>High Contrast</Text>
            <Switch value={false} />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Reduced Motion</Text>
            <Switch value={false} />
          </View>
        </Card>

        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Quiet Hours (10 PM - 7 AM)</Text>
            <Switch value={true} />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Message Alerts</Text>
            <Switch value={true} />
          </View>
        </Card>
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
  title: {
    ...theme.typography.h1,
    paddingHorizontal: 20,
    marginBottom: 20,
    color: theme.colors.text.primary,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: theme.colors.text.primary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    fontSize: 16,
    color: theme.colors.text.primary,
  },
});
