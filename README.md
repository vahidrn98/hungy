# Hungy - Adventure Log App 🏔️

A React Native app built with Expo that allows users to log their daily adventures and track their experiences with insights and statistics. Perfect for documenting life's little moments and building a personal adventure journal.

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Expo CLI** (install globally: `npm install -g @expo/cli`)
- **Expo Go app** on your mobile device (download from [App Store](https://apps.apple.com/app/expo-go/id982107779) or [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent))

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hungi
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   npx expo start
   ```

4. **Run on your device**
   - **Mobile**: Open Expo Go app and scan the QR code
   - **iOS Simulator**: Press `i` in the terminal
   - **Android Emulator**: Press `a` in the terminal
   - **Web Browser**: Press `w` in the terminal

## 📱 Features

### Core Functionality
- **Log Adventures**: Create short daily adventure entries with title, icon, and timestamp
- **Daily Summary**: View all adventures grouped by date with daily counts
- **Statistics**: Track weekly totals, most frequent activities, and streaks
- **Dark/Light Mode**: Automatically adapts to system theme

### App Structure
- **Log Adventure Tab**: Main screen for creating new adventure entries
- **Daily Summary Tab**: Timeline view of all adventures grouped by date
- **Stats Tab**: Detailed statistics and insights about your adventures

## 🛠️ Technical Requirements

### External Dependencies
- **Expo SDK 53**: Cross-platform development framework
- **React Native 0.79.6**: Mobile app development
- **TypeScript**: Type-safe development
- **AsyncStorage**: Local data persistence
- **React Navigation**: Tab-based navigation

### Key Libraries
- `@react-native-async-storage/async-storage`: Local data storage
- `expo-router`: File-based routing system
- `expo-haptics`: Tactile feedback
- `expo-blur`: Visual effects
- `react-native-reanimated`: Smooth animations

## 🏗️ Architecture & Design Choices

### Approach
This app follows a **component-based architecture** with clear separation of concerns:

1. **Type Safety First**: Full TypeScript implementation ensures robust development
2. **File-based Routing**: Expo Router provides intuitive navigation structure
3. **Local Storage**: AsyncStorage for offline-first data persistence
4. **Modular Components**: Reusable UI components with centralized styling

### Design Decisions

#### 1. **Data Model**
```typescript
interface Adventure {
  id: string;           // Unique identifier
  title: string;        // User-defined adventure title
  icon: string;         // Emoji icon for visual categorization
  timestamp: Date;      // Exact creation time
  date: string;         // YYYY-MM-DD format for easy grouping
}
```

**Rationale**: Simple yet comprehensive data structure that supports both detailed timestamps and easy date-based grouping.

#### 2. **Storage Strategy**
- **AsyncStorage**: Chosen for simplicity and offline capability
- **JSON Serialization**: Easy to implement and debug
- **Local-only**: No external dependencies or network requirements

**Rationale**: For a personal adventure log, local storage provides privacy, reliability, and simplicity.

#### 3. **UI/UX Design**
- **Tab Navigation**: Intuitive three-tab structure (Log, Summary, Stats)
- **Icon Selection**: 24 emoji icons for quick visual categorization
- **Pull-to-Refresh**: Standard mobile interaction pattern
- **Empty States**: Helpful guidance when no data exists

**Rationale**: Familiar mobile patterns reduce learning curve and improve user experience.

#### 4. **State Management**
- **React Hooks**: `useState` and `useEffect` for component state
- **Real-time Updates**: Data refreshes on navigation
- **Optimistic Updates**: Immediate UI feedback

**Rationale**: Simple state management appropriate for the app's scope without over-engineering.

### File Structure
```
├── app/                    # Expo Router pages
│   ├── (tabs)/            # Tab navigation screens
│   │   ├── index.tsx      # Log Adventure screen
│   │   ├── explore.tsx    # Daily Summary screen
│   │   └── stats.tsx      # Statistics screen
│   └── _layout.tsx        # Root layout
├── components/            # Reusable UI components
│   ├── AdventureCard.tsx  # Individual adventure display
│   ├── AdventureForm.tsx  # Adventure creation form
│   ├── AdventureStats.tsx # Statistics display
│   └── EmptyState.tsx     # Empty state component
├── types/                 # TypeScript type definitions
│   └── Adventure.ts       # Core data types
├── utils/                 # Utility functions
│   └── AdventureStorage.ts # Data persistence layer
└── styles/                # Centralized styling
    └── AdventureStyles.ts # Component styles
```

## 🎯 Usage Guide

### Logging Adventures
1. Open the "Log Adventure" tab
2. Enter a descriptive title
3. Select an appropriate emoji icon
4. Tap "Log Adventure" to save

### Viewing History
1. Switch to "Daily Summary" tab
2. Browse adventures grouped by date
3. Pull down to refresh data
4. Tap × to delete unwanted entries

### Checking Statistics
1. Visit the "Stats" tab
2. View weekly totals and insights
3. Track your most frequent activities
4. Monitor your adventure patterns

## 🔧 Development

### Available Scripts
```bash
npm start          # Start Expo development server
npm run android    # Run on Android emulator
npm run ios        # Run on iOS simulator
npm run web        # Run in web browser
npm run lint       # Run ESLint
npm run reset-project # Reset to fresh project
```

### Customization
- **Icons**: Modify `ADVENTURE_ICONS` array in `components/AdventureForm.tsx`
- **Styling**: Update `styles/AdventureStyles.ts` for visual changes
- **Data**: Extend `types/Adventure.ts` for additional fields

## 🚀 Deployment

### Building for Production
```bash
# Install EAS CLI
npm install -g @expo/eas-cli

# Configure EAS
eas build:configure

# Build for platforms
eas build --platform android
eas build --platform ios
```

### Web Deployment
```bash
# Build for web
npx expo export --platform web

# Deploy to any static hosting service
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤖 AI Development Assistance

This project was developed with the assistance of AI tools to enhance code quality and documentation:

1. **Modular Styling**: AI helped organize and centralize all component styles into a cohesive `AdventureStyles.ts` file, ensuring consistent theming and maintainable code structure.

2. **README Generation**: AI assisted in creating comprehensive documentation including setup instructions, architecture explanations, and usage guides to make the project accessible to developers.

3. **Edge Case Handling**: AI helped identify and implement robust error handling for missing data scenarios, empty states, and data persistence edge cases to ensure a smooth user experience.

4. **Data Generation**: AI assisted in generating a comprehensive list of categorized emojis for adventure logging, providing users with diverse and meaningful icon options to represent their daily experiences.

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev) and [React Native](https://reactnative.dev)
- Icons from [Expo Vector Icons](https://docs.expo.dev/guides/icons/)
- Styling inspired by modern mobile design patterns
- AI-assisted development for enhanced code quality and documentation

---

**Happy Adventuring!** 🎒✨
