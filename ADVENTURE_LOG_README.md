# Adventure Log - Daily Explorer App

A React Native app built with Expo that allows users to log their daily adventures and track their experiences with insights and statistics.

## Features

### 🎯 Core Functionality
- **Log Adventures**: Create short daily adventure entries with title, icon, and timestamp
- **Daily Summary**: View all adventures grouped by date with daily counts
- **Statistics**: Track weekly totals, most frequent activities, and streaks

### 📱 App Structure

#### Tab Navigation
1. **Log Adventure** - Main screen for creating new adventure entries
2. **Daily Summary** - Timeline view of all adventures grouped by date
3. **Stats** - Detailed statistics and insights about your adventures

#### Key Components
- `AdventureForm` - Form for creating new adventures with icon selection
- `AdventureCard` - Individual adventure display with delete functionality
- `AdventureStats` - Statistics display component
- `EmptyState` - Placeholder for empty data states

### 🎨 Design Features
- **Dark/Light Mode Support** - Automatically adapts to system theme
- **Modular Styling** - Centralized styles in `styles/AdventureStyles.ts`
- **Responsive UI** - Clean, modern interface with proper spacing
- **Icon Selection** - 24 different emoji icons for adventure categorization

### 💾 Data Persistence
- **AsyncStorage** - Local data persistence across app sessions
- **Real-time Updates** - Data refreshes automatically when navigating between screens
- **Pull-to-Refresh** - Manual refresh capability on summary and stats screens

### 📊 Statistics & Insights
- **Weekly Totals** - Count of adventures logged this week
- **Most Frequent Icon** - Shows your most used activity type
- **Day Streak** - Consecutive days with logged adventures
- **Most Active Day** - Day of the week with most adventures
- **Total Adventures** - Overall count of all logged adventures

## Technical Implementation

### Architecture
- **TypeScript** - Full type safety throughout the application
- **Expo Router** - File-based navigation system
- **React Hooks** - Modern React patterns for state management
- **Modular Components** - Reusable UI components with clear separation of concerns

### File Structure
```
├── types/
│   └── Adventure.ts          # Type definitions
├── utils/
│   └── AdventureStorage.ts   # Data persistence utilities
├── styles/
│   └── AdventureStyles.ts    # Centralized styling
├── components/
│   ├── AdventureCard.tsx     # Individual adventure display
│   ├── AdventureForm.tsx     # Adventure creation form
│   ├── AdventureStats.tsx    # Statistics display
│   └── EmptyState.tsx        # Empty state component
└── app/(tabs)/
    ├── index.tsx             # Log Adventure screen
    ├── explore.tsx           # Daily Summary screen
    └── stats.tsx             # Statistics screen
```

### Data Model
```typescript
interface Adventure {
  id: string;
  title: string;
  icon: string;
  timestamp: Date;
  date: string; // YYYY-MM-DD format
}
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Run on Device/Simulator**
   - Press `i` for iOS simulator
   - Press `a` for Android emulator
   - Press `w` for web browser

## Usage

1. **Log an Adventure**
   - Open the "Log Adventure" tab
   - Enter a title for your adventure
   - Select an appropriate icon
   - Tap "Log Adventure"

2. **View Daily Summary**
   - Switch to "Daily Summary" tab
   - See all adventures grouped by date
   - Pull down to refresh data
   - Tap × to delete adventures

3. **Check Statistics**
   - Visit the "Stats" tab
   - View weekly totals and insights
   - Track your adventure patterns
   - Monitor your activity streaks

## Customization

### Adding New Icons
Edit the `ADVENTURE_ICONS` array in `components/AdventureForm.tsx` to add or modify available icons.

### Styling Changes
All styles are centralized in `styles/AdventureStyles.ts` for easy customization.

### Data Storage
The app uses AsyncStorage for persistence. Data is stored locally on the device and persists between app sessions.

## Future Enhancements

- **Categories** - Organize adventures by type (food, travel, exercise, etc.)
- **Photos** - Attach images to adventures
- **Export** - Share or backup adventure data
- **Goals** - Set and track adventure goals
- **Social** - Share adventures with friends
- **Search** - Find specific adventures by title or date
- **Themes** - Additional color themes beyond light/dark mode

---

Built with ❤️ using React Native, Expo, and TypeScript.
