import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { theme } from '../../src/theme/theme';
import { Avatar } from '../../src/components/ui/Avatar';
import { Card } from '../../src/components/ui/Card';
import { Button } from '../../src/components/ui/Button';
import { useConnectionsStore } from '../../src/store/useConnectionsStore';
import { formatRelativeTime } from '../../src/utils/helpers';
import { FontAwesome } from '@expo/vector-icons';

export default function ConnectionsScreen() {
  const connections = useConnectionsStore(state => state.connections);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Circle</Text>
        <Button
          title="Add"
          size="s"
          icon={<FontAwesome name="plus" size={12} color="#fff" />}
        />
      </View>

      <FlatList
        data={connections}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <View style={styles.row}>
              <Avatar size={60} showHeartbeat={item.status === 'online'} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={[
                  styles.status,
                  { color: item.status === 'online' ? theme.colors.status.success : theme.colors.text.light }
                ]}>
                  {item.status === 'online' ? 'Active now' : `Seen ${formatRelativeTime(item.lastSeen)}`}
                </Text>
              </View>
              <TouchableOpacity style={styles.actionButton}>
                <FontAwesome name="heart-o" size={24} color={theme.colors.primary} />
              </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text.primary,
  },
  list: {
    paddingHorizontal: 20,
  },
  card: {
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
  status: {
    fontSize: 14,
    marginTop: 4,
  },
  actionButton: {
    padding: 8,
  },
});
