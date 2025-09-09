import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { AdventureTabIcon } from '@/components/AdventureTabIcon';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].primary,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            backgroundColor: Colors[colorScheme ?? 'light'].background,
            borderTopColor: Colors[colorScheme ?? 'light'].border,
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Log Adventure',
          tabBarIcon: ({ focused }) => <AdventureTabIcon emoji="➕" focused={focused} size={14} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Daily Summary',
          tabBarIcon: ({ focused }) => <AdventureTabIcon emoji="📅" focused={focused} size={14} />,
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: 'Stats',
          tabBarIcon: ({ focused }) => <AdventureTabIcon emoji="📊" focused={focused} size={14} />,
        }}
      />
    </Tabs>
  );
}
