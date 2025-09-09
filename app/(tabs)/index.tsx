/**
 * Adventure Logging Screen
 * Main screen for creating new adventure entries
 */

import { AdventureCard } from '@/components/AdventureCard';
import { AdventureForm } from '@/components/AdventureForm';
import { AdventureStats } from '@/components/AdventureStats';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AdventureStyles } from '@/styles/AdventureStyles';
import { Adventure, AdventureStats as Stats } from '@/types/Adventure';
import { deleteAdventure, getAdventures, getAdventureStats, saveAdventure } from '@/utils/AdventureStorage';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';

export default function AdventureLogScreen() {
  const [recentAdventures, setRecentAdventures] = useState<Adventure[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalThisWeek: 0,
    mostFrequentIcon: { icon: '', count: 0 },
    dailyCounts: {},
  });
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  // Load data when component mounts
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const adventures = await getAdventures();
      const adventureStats = await getAdventureStats();
      
      // Get last 3 adventures for display
      setRecentAdventures(adventures.slice(-3).reverse());
      setStats(adventureStats);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const handleAdventureSubmit = async (adventureData: Omit<Adventure, 'id' | 'timestamp' | 'date'>) => {
    try {
      const now = new Date();
      const newAdventure: Adventure = {
        id: Date.now().toString(),
        ...adventureData,
        timestamp: now,
        date: now.toISOString().split('T')[0], // YYYY-MM-DD format
      };

      await saveAdventure(newAdventure);
      await loadData(); // Refresh data
      
      Alert.alert('Success!', 'Adventure logged successfully! 🎉');
    } catch (error) {
      console.error('Error saving adventure:', error);
      Alert.alert('Error', 'Failed to save adventure. Please try again.');
    }
  };

  const handleDeleteAdventure = async (id: string) => {
    try {
      await deleteAdventure(id);
      await loadData(); // Refresh data
    } catch (error) {
      console.error('Error deleting adventure:', error);
      Alert.alert('Error', 'Failed to delete adventure. Please try again.');
    }
  };

  return (
    <ScrollView style={[
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
          Adventure Log
        </Text>
        <Text style={[
          AdventureStyles.bodyText,
          isDark && AdventureStyles.darkBodyText,
          { textAlign: 'center' }
        ]}>
          Capture your daily moments and adventures
        </Text>
      </View>

      <View style={AdventureStyles.contentContainer}>
        <AdventureStats stats={stats} />
        
        <AdventureForm onSubmit={handleAdventureSubmit} />

        {recentAdventures.length > 0 && (
          <View style={{ marginTop: 20 }}>
            <Text style={[
              AdventureStyles.subtitle,
              isDark && AdventureStyles.darkSubtitle
            ]}>
              Recent Adventures
            </Text>
            {recentAdventures.map((adventure) => (
              <AdventureCard
                key={adventure.id}
                adventure={adventure}
                onDelete={handleDeleteAdventure}
              />
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
}
