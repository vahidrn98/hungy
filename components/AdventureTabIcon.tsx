/**
 * AdventureTabIcon Component
 * Custom emoji-based icons for the bottom tab bar
 */

import React from 'react';
import { Text, View } from 'react-native';
import { useColorScheme } from '../hooks/useColorScheme';
import { AdventureStyles } from '../styles/AdventureStyles';

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
    <View style={[
      AdventureStyles.tabIconContainer,
      focused && AdventureStyles.tabIconContainerFocused,
      focused && isDark && AdventureStyles.darkTabIconContainerFocused
    ]}>
      <Text style={[
        AdventureStyles.tabIconText,
        focused && AdventureStyles.tabIconTextFocused,
        { fontSize: size }
      ]}>
        {emoji}
      </Text>
    </View>
  );
};
