import { create } from 'zustand';

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: number;
  read: boolean;
}

interface ChatState {
  chats: Record<string, Message[]>;
  sendMessage: (chatId: string, text: string) => void;
  markAsRead: (chatId: string) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  chats: {},
  sendMessage: (chatId, text) => set((state) => {
    const newMessage = {
      id: Math.random().toString(36).substr(2, 9),
      senderId: 'me',
      text,
      timestamp: Date.now(),
      read: false,
    };
    return {
      chats: {
        ...state.chats,
        [chatId]: [...(state.chats[chatId] || []), newMessage],
      }
    };
  }),
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
