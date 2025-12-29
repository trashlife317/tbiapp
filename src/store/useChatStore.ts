import { create } from 'zustand';
import { api } from '../services/api';

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: number;
  read: boolean;
  pending?: boolean;
}

interface ChatState {
  chats: Record<string, Message[]>;
  sendMessage: (chatId: string, text: string) => Promise<void>;
  markAsRead: (chatId: string) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  chats: {},
  sendMessage: async (chatId, text) => {
    // Optimistic update
    const tempId = Math.random().toString(36).substr(2, 9);
    const optimisticMessage: Message = {
      id: tempId,
      senderId: 'me',
      text,
      timestamp: Date.now(),
      read: false,
      pending: true,
    };

    set((state) => ({
      chats: {
        ...state.chats,
        [chatId]: [...(state.chats[chatId] || []), optimisticMessage],
      }
    }));

    try {
      // Call API
      const response = await api.chat.sendMessage(chatId, text);

      // Update with real message from server
      set((state) => ({
        chats: {
          ...state.chats,
          [chatId]: state.chats[chatId].map(msg =>
            msg.id === tempId ? { ...response, read: false, pending: false } : msg
          ),
        }
      }));
    } catch (error) {
      console.error("Failed to send message", error);
      // Could handle error state here (e.g. mark as failed)
    }
  },
  markAsRead: (chatId) => set((state) => {
    const chat = state.chats[chatId];
    if (!chat) return state;
    return {
      chats: {
        ...state.chats,
        [chatId]: chat.map(m => ({ ...m, read: true })),
      }
    };
  }),
}));
