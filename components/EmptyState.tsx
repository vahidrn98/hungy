/**
 * EmptyState Component
 * Displays when there are no adventures to show
 */

import React from 'react';
import { Text, View } from 'react-native';
import { useColorScheme } from '../hooks/useColorScheme';
import { AdventureStyles } from '../styles/AdventureStyles';

interface EmptyStateProps {
  title: string;
  subtitle?: string;
  icon?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ 
  title, 
  subtitle = "Start logging your daily adventures!", 
  icon = "🌟" 
}) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={AdventureStyles.emptyState}>
      <Text style={[
        AdventureStyles.emptyIcon,
        isDark && AdventureStyles.darkEmptyIcon
      ]}>
        {icon}
      </Text>
      <Text style={[
        AdventureStyles.emptyText,
        isDark && AdventureStyles.darkEmptyText
      ]}>
        {title}
      </Text>
      <Text style={[
        AdventureStyles.emptySubtext,
        isDark && AdventureStyles.darkEmptySubtext
      ]}>
        {subtitle}
      </Text>
    </View>
  );
};
