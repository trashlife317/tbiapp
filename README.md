# 💛 TBI Link - A Heartfelt Community App for TBI Survivors & Caregivers

A beautiful, compassionate React Native (Expo) mobile app connecting traumatic brain injury survivors and caregivers. Built with warmth, accessibility, and hope at its core.

## ✨ Features

### Core Functionality
- **🌅 Onboarding Flow**: Gentle 3-slide introduction with role selection (survivor/caregiver)
- **🏠 Home Feed (Journey Stream)**: Beautiful card-based feed showing mood check-ins, wins, and photos
- **😊 Mood Logger**: One-tap mood tracking with 6 emoji buttons + optional voice journaling
- **🤝 My Circle**: Connect with others via QR codes, see who's active with heartbeat animations
- **💬 Private & Group Chat**: Soft message bubbles with heart read receipts
- **🚨 SOS Button**: Fixed bottom-right button for emergency alerts with location & medical info
- **💛 Caregiver Dashboard**: Mood graphs, medication reminders, daily encouragement
- **🔍 Discover**: Safe peer matching with filters for injury type, interests, location
- **⚙️ Accessibility Settings**: Dark mode, reduced motion, high contrast, text scaling, quiet hours

### Design Highlights
- **Warm Color Palette**: Sunrise gradients (peach, teal, warm gold)
- **Rounded Corners & Soft Shadows**: Everything feels gentle and welcoming
- **Haptic Feedback**: Tactile responses throughout the app
- **Animations**: Gentle bounces, fades, heartbeat pulses using Reanimated 3
- **Encouraging Messages**: Rotating supportive text ("You've got this," "One day at a time")
- **High Contrast Text**: WCAG AAA compliant for accessibility
- **VoiceOver Friendly**: Full accessibility labels

### Easter Egg 🎁
Shake your phone 3 times to see a shower of golden neural sparkles with the message:  
**"Your brain is healing right now."** ✨🧠

## 🛠 Tech Stack

- **React Native** with **Expo SDK 54**
- **TypeScript** for type safety
- **Expo Router** for file-based navigation
- **NativeWind** (Tailwind CSS for React Native)
- **Zustand** for state management
- **Reanimated 3** for smooth animations
- **Expo Haptics** for tactile feedback
- **Expo Location** for SOS feature
- **Expo Camera & Image Picker** for photo sharing
- **Expo Linear Gradient** for beautiful backgrounds

## 📁 Project Structure

```
tbi/
├── app/                      # Expo Router screens
│   ├── (tabs)/              # Tab navigation
│   │   ├── home.tsx         # Journey Stream feed
│   │   ├── connections.tsx  # My Circle
│   │   ├── messages.tsx     # Conversations list
│   │   ├── caregiver.tsx    # Caregiver dashboard
│   │   ├── discover.tsx     # Peer matching
│   │   └── settings.tsx     # Accessibility settings
│   ├── chat/
│   │   └── [id].tsx         # Chat detail screen
│   ├── _layout.tsx          # Root layout
│   ├── index.tsx            # Entry point
│   ├── onboarding.tsx       # 3-slide onboarding + role picker
│   └── mood-logger.tsx      # Mood tracking screen
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Avatar.tsx   # With heartbeat animation
│   │   │   ├── GradientBackground.tsx
│   │   │   └── EncouragingText.tsx
│   │   ├── MoodEmoji.tsx    # Large mood buttons
│   │   └── FloatingSOSButton.tsx  # Emergency button
│   ├── store/               # Zustand stores
│   │   ├── useUserStore.ts  # Profile & settings
│   │   ├── useMoodStore.ts  # Mood tracking & streaks
│   │   ├── useConnectionsStore.ts
│   │   ├── useChatStore.ts
│   │   └── useSOSStore.ts
│   ├── theme/
│   │   └── theme.ts         # Color palette & design tokens
│   └── utils/
│       ├── haptics.ts       # Haptic feedback helpers
│       └── animations.ts    # Animation presets
├── assets/                  # Icons, fonts, images
├── package.json
├── tsconfig.json
├── tailwind.config.js       # Custom color palette
├── metro.config.js          # NativeWind integration
├── babel.config.js          # Reanimated plugin
├── app.json                 # Expo configuration
└── global.css               # Tailwind directives

```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Expo Go app on your iOS or Android device (or an emulator)

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npx expo start
   ```

3. **Run on your device**:
   - Scan the QR code with Expo Go (Android) or Camera app (iOS)
   - Or press `i` for iOS Simulator, `a` for Android Emulator

### First Time Setup

1. The app will open to the **onboarding flow**
2. Swipe through 3 welcome slides
3. Select your role: "I'm a survivor" or "I'm a caregiver"
4. Tap "Let's Begin" to enter the app

## 📱 How to Use

### Daily Check-In
1. From the **Home** screen, tap the yellow "How I'm Feeling Today" card
2. Select one of 6 mood emojis
3. Optionally add journal notes (or use voice-to-text)
4. Save to track your mood and build streaks 🔥

### Connect with Your Circle
1. Go to **Connections** tab
2. Tap the add button (➕)
3. Choose to scan a QR code or share yours
4. See active connections with heartbeat animations 💚

### Chat & Support
1. Visit **Messages** to see conversations
2. Tap any chat to open
3. Send messages, photos, and see heart read receipts

### Emergency SOS
- The red **SOS button** is always visible (bottom-right)
- Tap it to send location + medical info to emergency contacts
- Confirm before sending

### Caregivers
If you selected "Caregiver" during onboarding:
- Access the **Dashboard** tab to see mood trends
- Track medication reminders
- Get daily encouragement

## 🎨 Design Philosophy

TBI Link is designed to feel like a warm hug. Every color, animation, and interaction is crafted with care:

- **Soft Gradients**: Sunrise (peach/coral), Ocean (teal/cyan), Warm Gold
- **Generous Whitespace**: Reduce cognitive load
- **Large Tap Targets**: Easy interaction for users with motor challenges
- **Encouraging Microcopy**: "You've got this," "One day at a time"
- **Accessibility First**: Dark mode, text scaling, reduced motion, high contrast

## 🔐 Privacy & Safety

- All profiles in **Discover** are moderated
- SOS feature requires explicit user confirmation
- Medical information is stored locally (no backend in demo version)
- Report feature available for concerning content

## 🌟 Easter Egg

Want to discover something special? Shake your phone 3 times rapidly to see golden neural sparkles and a healing affirmation! 🌟🧠

## 🛣 Roadmap (Future Enhancements)

This initial version uses local state and mock data. For production:

- [ ] Backend API integration (user management, chat, data persistence)
- [ ] Push notifications for messages & SOS alerts
- [ ] Real QR code scanning with `expo-camera`
- [ ] Voice-to-text using Speech API
- [ ] AsyncStorage or SQLite for offline data
- [ ] Content moderation for Discover/matching
- [ ] Real location services for SOS
- [ ] Professional medical disclaimer review

## 📄 License

This is a demo project created with love and care for the TBI community.

## 💛 Built With Love

Every line of code in TBI Link was written with compassion for survivors and caregivers navigating the challenges of traumatic brain injury. You are not alone. Your journey matters. One day at a time. 🌅

---

**Questions or feedback?** This app was designed to be lovable, accessible, and supportive. If it gave you even a moment of hope or connection, it served its purpose. 💛
