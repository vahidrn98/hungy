/**
 * Adventure Log Types
 * Defines the data structure for adventure entries and related types
 */

export interface Adventure {
  id: string;
  title: string;
  icon: string;
  timestamp: Date;
  date: string; // YYYY-MM-DD format for easy grouping
}

export interface AdventureStats {
  totalThisWeek: number;
  mostFrequentIcon: {
    icon: string;
    count: number;
  };
  dailyCounts: {
    [date: string]: number;
  };
}

export interface DailyAdventures {
  date: string;
  adventures: Adventure[];
  count: number;
}
