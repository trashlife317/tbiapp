import React, { useState } from 'react';
import { View, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { theme } from '../../src/theme/theme';
import { Input } from '../../src/components/ui/Input';
import { Button } from '../../src/components/ui/Button';
import { Card } from '../../src/components/ui/Card';
import { Text } from 'react-native';
import { useChatStore } from '../../src/store/useChatStore';

export default function ChatScreen() {
  const { id } = useLocalSearchParams();
  const chatId = Array.isArray(id) ? id[0] : id;
  const [text, setText] = useState('');
  const messages = useChatStore(state => state.chats[chatId] || []);
  const sendMessage = useChatStore(state => state.sendMessage);

  const handleSend = () => {
    if (text.trim()) {
      sendMessage(chatId, text.trim());
      setText('');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={[
            styles.messageContainer,
            item.senderId === 'me' ? styles.myMessage : styles.theirMessage
          ]}>
            <Card style={styles.bubble}>
              <Text>{item.text}</Text>
            </Card>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <Input
          value={text}
          onChangeText={setText}
          placeholder="Type a message..."
          style={styles.input}
        />
        <Button title="Send" onPress={handleSend} size="s" />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  list: {
    padding: 16,
  },
  messageContainer: {
    marginBottom: 10,
    maxWidth: '80%',
  },
  myMessage: {
    alignSelf: 'flex-end',
  },
  theirMessage: {
    alignSelf: 'flex-start',
  },
  bubble: {
    padding: 10,
    borderRadius: 16,
  },
  inputContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: theme.colors.ui.border,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    flex: 1,
    marginBottom: 0,
  },
});
