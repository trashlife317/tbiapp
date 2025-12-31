// TBI Link - AI Service
// Handles interactions with OpenAI (or mock fallback)

const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = 'YOUR_OPENAI_API_KEY'; // Replace with real key in production (env var)

export const ai = {
  sendMessage: async (message: string): Promise<string> => {
    // 1. If no API key is configured, return a mock supportive response
    if (API_KEY === 'YOUR_OPENAI_API_KEY') {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate thinking delay
      return getMockResponse(message);
    }

    // 2. Real API Call (Uncomment and configure to use)
    /*
    try {
      const response = await fetch(OPENAI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a compassionate, patient, and helpful companion for someone recovering from a Traumatic Brain Injury (TBI). Keep responses short, encouraging, and easy to read." },
            { role: "user", content: message }
          ]
        })
      });
      const data = await response.json();
      return data.choices[0].message.content;
    } catch (error) {
      console.error("AI API Error:", error);
      return "I'm having a little trouble connecting right now, but I'm here for you. 💛";
    }
    */
    return "I'm having a little trouble connecting right now, but I'm here for you. 💛";
  }
};

// Simple keyword matching for mock responses
const getMockResponse = (input: string): string => {
  const text = input.toLowerCase();
  if (text.includes('tired') || text.includes('sleep')) return "Rest is so important for your healing. It's okay to take a break. 😴";
  if (text.includes('sad') || text.includes('cry')) return "I hear you. It's okay to feel this way. You are stronger than you know. 💛";
  if (text.includes('pain') || text.includes('hurt')) return "I'm sorry you're in pain. Have you taken your medication or tried a cold compress? 🧊";
  if (text.includes('hello') || text.includes('hi')) return "Hi there! I'm your AI companion. How are you feeling today? 😊";
  return "I'm listening. Take your time, one day at a time. You've got this. 🌟";
};
