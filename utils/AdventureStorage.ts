/**
 * Adventure Storage Utilities
 * Handles data persistence for adventure logs using AsyncStorage
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Adventure, AdventureStats, DailyAdventures } from '../types/Adventure';

const ADVENTURES_KEY = '@adventures';

/**
 * Save an adventure to storage
 */
export const saveAdventure = async (adventure: Adventure): Promise<void> => {
  try {
    const existingAdventures = await getAdventures();
    const updatedAdventures = [...existingAdventures, adventure];
    await AsyncStorage.setItem(ADVENTURES_KEY, JSON.stringify(updatedAdventures));
  } catch (error) {
    console.error('Error saving adventure:', error);
    throw error;
  }
};

/**
 * Get all adventures from storage
 */
export const getAdventures = async (): Promise<Adventure[]> => {
  try {
    const adventuresJson = await AsyncStorage.getItem(ADVENTURES_KEY);
    if (adventuresJson) {
      const adventures = JSON.parse(adventuresJson);
      // Convert timestamp strings back to Date objects
      return adventures.map((adventure: any) => ({
        ...adventure,
        timestamp: new Date(adventure.timestamp),
      }));
    }
    return [];
  } catch (error) {
    console.error('Error getting adventures:', error);
    return [];
  }
};

/**
 * Get adventures for a specific date
 */
export const getAdventuresForDate = async (date: string): Promise<Adventure[]> => {
  const allAdventures = await getAdventures();
  return allAdventures.filter(adventure => adventure.date === date);
};

/**
 * Get adventures grouped by date
 */
export const getAdventuresByDate = async (): Promise<DailyAdventures[]> => {
  const allAdventures = await getAdventures();
  const groupedByDate: { [date: string]: Adventure[] } = {};

  // Group adventures by date
  allAdventures.forEach(adventure => {
    if (!groupedByDate[adventure.date]) {
      groupedByDate[adventure.date] = [];
    }
    groupedByDate[adventure.date].push(adventure);
  });

  // Convert to array and sort by date (newest first)
  return Object.entries(groupedByDate)
    .map(([date, adventures]) => ({
      date,
      adventures: adventures.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()),
      count: adventures.length,
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
};

/**
 * Get statistics for adventures
 */
export const getAdventureStats = async (): Promise<AdventureStats> => {
  const allAdventures = await getAdventures();
  
  // Calculate date range for this week
  const now = new Date();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay()); // Start of current week (Sunday)
  startOfWeek.setHours(0, 0, 0, 0);
  
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6); // End of current week (Saturday)
  endOfWeek.setHours(23, 59, 59, 999);

  // Filter adventures for this week
  const thisWeekAdventures = allAdventures.filter(adventure => {
    const adventureDate = new Date(adventure.timestamp);
    return adventureDate >= startOfWeek && adventureDate <= endOfWeek;
  });

  // Count icon frequency
  const iconCounts: { [icon: string]: number } = {};
  allAdventures.forEach(adventure => {
    iconCounts[adventure.icon] = (iconCounts[adventure.icon] || 0) + 1;
  });

  // Find most frequent icon
  const mostFrequentIcon = Object.entries(iconCounts).reduce(
    (max, [icon, count]) => (count > max.count ? { icon, count } : max),
    { icon: '', count: 0 }
  );

  // Calculate daily counts
  const dailyCounts: { [date: string]: number } = {};
  allAdventures.forEach(adventure => {
    dailyCounts[adventure.date] = (dailyCounts[adventure.date] || 0) + 1;
  });

  return {
    totalThisWeek: thisWeekAdventures.length,
    mostFrequentIcon,
    dailyCounts,
  };
};

/**
 * Delete an adventure by ID
 */
export const deleteAdventure = async (adventureId: string): Promise<void> => {
  try {
    const existingAdventures = await getAdventures();
    const updatedAdventures = existingAdventures.filter(adventure => adventure.id !== adventureId);
    await AsyncStorage.setItem(ADVENTURES_KEY, JSON.stringify(updatedAdventures));
  } catch (error) {
    console.error('Error deleting adventure:', error);
    throw error;
  }
};
