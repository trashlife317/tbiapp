import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../../src/theme/theme';
import { Card } from '../../src/components/ui/Card';
import { EncouragingText } from '../../src/components/ui/EncouragingText';
import { Button } from '../../src/components/ui/Button';

export default function CaregiverScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Caregiver Dashboard</Text>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <EncouragingText style={styles.encouragement} />

        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Mood Trends</Text>
          <View style={styles.placeholderGraph}>
            <Text style={styles.placeholderText}>Weekly Overview Graph Placeholder</Text>
          </View>
        </Card>

        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Medications</Text>
          <View style={styles.medicationRow}>
            <Text style={styles.medName}>Amantadine</Text>
            <Text style={styles.medTime}>8:00 AM</Text>
          </View>
          <View style={styles.medicationRow}>
            <Text style={styles.medName}>Melatonin</Text>
            <Text style={styles.medTime}>9:00 PM</Text>
          </View>
          <Button title="Add Medication" variant="outline" size="s" style={styles.addButton} />
        </Card>

        <Card style={styles.section}>
          <Text style={styles.sectionTitle}>Caregiver Resources</Text>
          <Text style={styles.resourceLink}>• Understanding TBI Recovery Stages</Text>
          <Text style={styles.resourceLink}>• Self-Care for Caregivers</Text>
          <Text style={styles.resourceLink}>• Local Support Groups</Text>
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
    marginBottom: 10,
    color: theme.colors.text.primary,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  encouragement: {
    marginBottom: 20,
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
  placeholderGraph: {
    height: 150,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: theme.colors.text.light,
  },
  medicationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.ui.border,
  },
  medName: {
    fontSize: 16,
    color: theme.colors.text.primary,
  },
  medTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  addButton: {
    marginTop: 8,
  },
  resourceLink: {
    fontSize: 16,
    color: theme.colors.secondary,
    marginBottom: 12,
    textDecorationLine: 'underline',
  },
});
