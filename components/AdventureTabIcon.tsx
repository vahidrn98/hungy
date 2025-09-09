/**
 * AdventureTabIcon Component
 * Custom emoji-based icons for the bottom tab bar
 */

import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { useColorScheme } from '../hooks/useColorScheme';

interface AdventureTabIconProps {
  emoji: string;
  focused: boolean;
  size?: number;
}

export const AdventureTabIcon: React.FC<AdventureTabIconProps> = ({ 
  emoji, 
  focused, 
  size = 24 
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: focused 
        ? (isDark ? Colors.dark.primary + '20' : Colors.light.primary + '20')
        : 'transparent',
      borderWidth: focused ? 2 : 0,
      borderColor: focused 
        ? (isDark ? Colors.dark.primary : Colors.light.primary)
        : 'transparent',
    }}>
      <Text style={{
        fontSize: size,
        opacity: focused ? 1 : 0.6,
      }}>
        {emoji}
      </Text>
    </View>
  );
};
