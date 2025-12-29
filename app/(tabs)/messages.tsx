import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { theme } from '../../src/theme/theme';
import { Card } from '../../src/components/ui/Card';
import { Avatar } from '../../src/components/ui/Avatar';
import { useChatStore } from '../../src/store/useChatStore';

// Mock chat list since the store organizes by chat ID
const MOCK_CHATS = [
  { id: '1', name: 'Sarah', lastMessage: 'Hey! How are you feeling today?', time: Date.now() - 300000, unread: 2 },
  { id: '2', name: 'Dr. Smith', lastMessage: 'Remember your appointment tomorrow.', time: Date.now() - 86400000, unread: 0 },
];

export default function MessagesScreen() {
  const router = useRouter();

  const handlePress = (id: string) => {
    router.push(`/chat/${id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <FlatList
        data={MOCK_CHATS}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item.id)}>
            <Card style={styles.card}>
              <View style={styles.row}>
                <Avatar size={50} />
                <View style={styles.content}>
                  <View style={styles.header}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.time}>{new Date(item.time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</Text>
                  </View>
                  <Text numberOfLines={1} style={[
                    styles.message,
                    item.unread > 0 && styles.unreadMessage
                  ]}>
                    {item.lastMessage}
                  </Text>
                </View>
                {item.unread > 0 && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.unread}</Text>
                  </View>
                )}
              </View>
            </Card>
          </TouchableOpacity>
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
    marginBottom: 20,
    color: theme.colors.text.primary,
  },
  list: {
    paddingHorizontal: 20,
  },
  card: {
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.colors.text.primary,
  },
  time: {
    fontSize: 12,
    color: theme.colors.text.light,
  },
  message: {
    fontSize: 14,
    color: theme.colors.text.secondary,
  },
  unreadMessage: {
    color: theme.colors.text.primary,
    fontWeight: '600',
  },
  badge: {
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    paddingHorizontal: 6,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
