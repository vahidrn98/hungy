/**
 * Stats Screen
 * Shows detailed statistics about adventures including weekly totals and icon frequency
 */

import { AdventureStats } from '@/components/AdventureStats';
import { EmptyState } from '@/components/EmptyState';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AdventureStyles } from '@/styles/AdventureStyles';
import { AdventureStats as Stats } from '@/types/Adventure';
import { getAdventureStats, getAdventures } from '@/utils/AdventureStorage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';

export default function StatsScreen() {
  const [stats, setStats] = useState<Stats>({
    totalThisWeek: 0,
    mostFrequentIcon: { icon: '', count: 0 },
    dailyCounts: {},
  });
  const [totalAdventures, setTotalAdventures] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Load data when screen comes into focus
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  const loadData = async () => {
    try {
      const [adventureStats, allAdventures] = await Promise.all([
        getAdventureStats(),
        getAdventures()
      ]);
      
      setStats(adventureStats);
      setTotalAdventures(allAdventures.length);
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  const getWeekStreak = (): number => {
    const today = new Date();
    let streak = 0;
    
    for (let i = 0; i < 7; i++) {
      const checkDate = new Date(today);
      checkDate.setDate(today.getDate() - i);
      const dateString = checkDate.toISOString().split('T')[0];
      
      if (stats.dailyCounts[dateString] && stats.dailyCounts[dateString] > 0) {
        streak++;
      } else {
        break;
      }
    }
    
    return streak;
  };

  const getMostActiveDay = (): string => {
    const entries = Object.entries(stats.dailyCounts);
    if (entries.length === 0) return 'No data';
    
    const [date, count] = entries.reduce((max, [date, count]) => 
      count > max[1] ? [date, count] : max
    );
    
    const dateObj = new Date(date);
    return `${dateObj.toLocaleDateString('en-US', { weekday: 'long' })} (${count} adventures)`;
  };

  if (totalAdventures === 0) {
    return (
      <View style={[
        AdventureStyles.container,
        isDark && AdventureStyles.darkContainer
      ]}>
        <View style={[
          AdventureStyles.headerContainer,
          isDark && AdventureStyles.darkHeaderContainer
        ]}>
          <Text style={[
            AdventureStyles.title,
            isDark && AdventureStyles.darkTitle
          ]}>
            Statistics
          </Text>
          <Text style={[
            AdventureStyles.bodyText,
            isDark && AdventureStyles.darkBodyText
          ]}>
            Your adventure insights
          </Text>
        </View>
        <EmptyState
          title="No data yet"
          subtitle="Log some adventures to see your statistics!"
          icon="📊"
        />
      </View>
    );
  }

  return (
    <ScrollView 
      style={[
        AdventureStyles.container,
        isDark && AdventureStyles.darkContainer
      ]}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={[
        AdventureStyles.headerContainer,
        isDark && AdventureStyles.darkHeaderContainer
      ]}>
        <Text style={[
          AdventureStyles.title,
          isDark && AdventureStyles.darkTitle
        ]}>
          Statistics
        </Text>
        <Text style={[
          AdventureStyles.bodyText,
          isDark && AdventureStyles.darkBodyText
        ]}>
          Your adventure insights
        </Text>
      </View>

      <View style={AdventureStyles.contentContainer}>
        <AdventureStats stats={stats} />

        <View style={AdventureStyles.statsContainer}>
          <View style={[
            AdventureStyles.statCard,
            isDark && AdventureStyles.darkStatCard
          ]}>
            <Text style={[
              AdventureStyles.statNumber,
              isDark && AdventureStyles.darkStatNumber
            ]}>
              {totalAdventures}
            </Text>
            <Text style={[
              AdventureStyles.statLabel,
              isDark && AdventureStyles.darkStatLabel
            ]}>
              Total Adventures
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
              {getWeekStreak()}
            </Text>
            <Text style={[
              AdventureStyles.statLabel,
              isDark && AdventureStyles.darkStatLabel
            ]}>
              Day Streak
            </Text>
          </View>
        </View>

        <View style={[
          AdventureStyles.formContainer,
          isDark && AdventureStyles.darkFormContainer,
          { marginTop: 20 }
        ]}>
          <Text style={[
            AdventureStyles.subtitle,
            isDark && AdventureStyles.darkSubtitle,
            { marginBottom: 16 }
          ]}>
            Insights
          </Text>

          <View style={{ marginBottom: 16 }}>
            <Text style={[
              AdventureStyles.insightsLabel,
              isDark && AdventureStyles.darkInsightsLabel
            ]}>
              Most Active Day:
            </Text>
            <Text style={[
              AdventureStyles.insightsText,
              isDark && AdventureStyles.darkInsightsText
            ]}>
              {getMostActiveDay()}
            </Text>
          </View>

          <View style={{ marginBottom: 16 }}>
            <Text style={[
              AdventureStyles.insightsLabel,
              isDark && AdventureStyles.darkInsightsLabel
            ]}>
              Favorite Activity:
            </Text>
            <Text style={[
              AdventureStyles.insightsText,
              isDark && AdventureStyles.darkInsightsText
            ]}>
              {stats.mostFrequentIcon.count > 0 
                ? `${stats.mostFrequentIcon.icon} (${stats.mostFrequentIcon.count} times)`
                : 'No data yet'
              }
            </Text>
          </View>

          <View>
            <Text style={[
              AdventureStyles.insightsLabel,
              isDark && AdventureStyles.darkInsightsLabel
            ]}>
              This Week's Progress:
            </Text>
            <Text style={[
              AdventureStyles.insightsText,
              isDark && AdventureStyles.darkInsightsText
            ]}>
              {stats.totalThisWeek} adventures logged
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
