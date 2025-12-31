// TBI Link - API Service
// This simulates a real API client. In the future, replace the mock delays with actual fetch calls.

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: number;
}

const MOCK_DELAY = 1000;

export const api = {
  chat: {
    sendMessage: async (chatId: string, text: string): Promise<ChatMessage> => {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));

      // Simulate successful response
      return {
        id: Math.random().toString(36).substr(2, 9),
        senderId: 'me',
        text,
        timestamp: Date.now(),
      };
    },

    fetchMessages: async (chatId: string): Promise<ChatMessage[]> => {
      await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
      return []; // Return mock history if needed
    }
  },

  user: {
    updateProfile: async (data: any) => {
      await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
      return { success: true };
    }
  }
};
