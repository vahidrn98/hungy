/**
 * Daily Summary Screen
 * Shows all adventures grouped by date with daily counts
 */

import { AdventureCard } from '@/components/AdventureCard';
import { EmptyState } from '@/components/EmptyState';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AdventureStyles } from '@/styles/AdventureStyles';
import { DailyAdventures } from '@/types/Adventure';
import { deleteAdventure, getAdventuresByDate } from '@/utils/AdventureStorage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { RefreshControl, ScrollView, Text, View } from 'react-native';

export default function DailySummaryScreen() {
  const [dailyAdventures, setDailyAdventures] = useState<DailyAdventures[]>([]);
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
      const adventures = await getAdventuresByDate();
      setDailyAdventures(adventures);
    } catch (error) {
      console.error('Error loading adventures:', error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  const handleDeleteAdventure = async (id: string) => {
    try {
      await deleteAdventure(id);
      await loadData(); // Refresh data
    } catch (error) {
      console.error('Error deleting adventure:', error);
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (dateString === today.toISOString().split('T')[0]) {
      return 'Today';
    } else if (dateString === yesterday.toISOString().split('T')[0]) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { 
        weekday: 'long', 
        month: 'short', 
        day: 'numeric' 
      });
    }
  };

  if (dailyAdventures.length === 0) {
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
            Daily Summary
          </Text>
          <Text style={[
            AdventureStyles.bodyText,
            isDark && AdventureStyles.darkBodyText
          ]}>
            Your adventure timeline
          </Text>
        </View>
        <EmptyState
          title="No adventures yet"
          subtitle="Start logging your daily adventures to see them here!"
          icon="📅"
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
          Daily Summary
        </Text>
        <Text style={[
          AdventureStyles.bodyText,
          isDark && AdventureStyles.darkBodyText
        ]}>
          Your adventure timeline
        </Text>
      </View>

      <View style={AdventureStyles.contentContainer}>
        {dailyAdventures.map((day) => (
          <View key={day.date} style={{ marginBottom: 24 }}>
            <View style={[
              AdventureStyles.dailyHeader,
              isDark && AdventureStyles.darkDailyHeader
            ]}>
              <Text style={[
                AdventureStyles.dailyDate,
                isDark && AdventureStyles.darkDailyDate
              ]}>
                {formatDate(day.date)}
              </Text>
              <Text style={[
                AdventureStyles.dailyCount,
                isDark && AdventureStyles.darkDailyCount
              ]}>
                {day.count} {day.count === 1 ? 'adventure' : 'adventures'}
              </Text>
            </View>

            {day.adventures.map((adventure) => (
              <AdventureCard
                key={adventure.id}
                adventure={adventure}
                onDelete={handleDeleteAdventure}
              />
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
