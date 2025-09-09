/**
 * AdventureCard Component
 * Displays individual adventure entries with title, icon, and timestamp
 */

import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';
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
             style={{
               width: 32,
               height: 32,
               borderRadius: 16,
               backgroundColor: isDark ? Colors.dark.error + '20' : Colors.light.error + '20',
               borderWidth: 1,
               borderColor: isDark ? Colors.dark.error : Colors.light.error,
               alignItems: 'center',
               justifyContent: 'center',
              
               }}
           >
             <Text style={{ 
               color: isDark ? Colors.dark.error : Colors.light.error, 
               fontSize: 18,
               fontWeight: 'bold',
               lineHeight: 18
             }}>×</Text>
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
