/**
 * AdventureStats Component
 * Displays statistics about adventures including weekly totals and icon frequency
 */

import React from 'react';
import { Text, View } from 'react-native';
import { useColorScheme } from '../hooks/useColorScheme';
import { AdventureStyles } from '../styles/AdventureStyles';
import { AdventureStats as Stats } from '../types/Adventure';

interface AdventureStatsProps {
  stats: Stats;
}

export const AdventureStats: React.FC<AdventureStatsProps> = ({ stats }) => {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <View style={AdventureStyles.statsContainer}>
      <View style={[
        AdventureStyles.statCard,
        isDark && AdventureStyles.darkStatCard
      ]}>
        <Text style={[
          AdventureStyles.statNumber,
          isDark && AdventureStyles.darkStatNumber
        ]}>
          {stats.totalThisWeek}
        </Text>
        <Text style={[
          AdventureStyles.statLabel,
          isDark && AdventureStyles.darkStatLabel
        ]}>
          This Week
        </Text>
      </View>

      <View style={[
        AdventureStyles.statCard,
        isDark && AdventureStyles.darkStatCard
      ]}>
        <Text style={[
          AdventureStyles.statNumber,
          isDark && AdventureStyles.darkStatNumber
        ]}>
          {stats.mostFrequentIcon.icon || '📝'}
        </Text>
        <Text style={[
          AdventureStyles.statLabel,
          isDark && AdventureStyles.darkStatLabel
        ]}>
          {stats.mostFrequentIcon.count > 0 
            ? `Most Used (${stats.mostFrequentIcon.count})`
            : 'No Data'
          }
        </Text>
      </View>
    </View>
  );
};
