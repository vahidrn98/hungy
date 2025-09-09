/**
 * AdventureCard Component
 * Displays individual adventure entries with title, icon, and timestamp
 */

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useColorScheme } from '../hooks/useColorScheme';
import { AdventureStyles } from '../styles/AdventureStyles';
import { Adventure } from '../types/Adventure';

interface AdventureCardProps {
  adventure: Adventure;
  onDelete?: (id: string) => void;
}

export const AdventureCard: React.FC<AdventureCardProps> = ({ adventure, onDelete }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const formatTime = (timestamp: Date): string => {
    return timestamp.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  return (
    <View style={[
      AdventureStyles.adventureCard,
      isDark && AdventureStyles.darkAdventureCard
    ]}>
      <View style={AdventureStyles.adventureHeader}>
        <Text style={AdventureStyles.adventureIcon}>
          {adventure.icon}
        </Text>
        <Text style={[
          AdventureStyles.adventureTitle,
          isDark && AdventureStyles.darkAdventureTitle
        ]}>
          {adventure.title}
        </Text>
         {onDelete && (
           <TouchableOpacity
             onPress={() => onDelete(adventure.id)}
             style={[
               AdventureStyles.deleteButton,
               isDark && AdventureStyles.darkDeleteButton
             ]}
           >
             <Text style={[
               AdventureStyles.deleteButtonText,
               isDark && AdventureStyles.darkDeleteButtonText
             ]}>×</Text>
           </TouchableOpacity>
         )}
      </View>
      <Text style={[
        AdventureStyles.adventureTimestamp,
        isDark && AdventureStyles.darkAdventureTimestamp
      ]}>
        {formatTime(adventure.timestamp)}
      </Text>
    </View>
  );
};
