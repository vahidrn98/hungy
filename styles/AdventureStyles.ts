/**
 * Adventure Log App Styles
 * Centralized styling for all adventure-related components
 */

import { StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

export const AdventureStyles = StyleSheet.create({
  // Container styles
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  darkContainer: {
    backgroundColor: Colors.dark.background,
  },
  contentContainer: {
    padding: 16,
  },
  headerContainer: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.light.primary,
    alignItems: 'center',
  },
  darkHeaderContainer: {
    backgroundColor: Colors.dark.primary,
  },

  // Text styles
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  darkTitle: {
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light.text,
    marginBottom: 16,
  },
  darkSubtitle: {
    color: Colors.dark.text,
  },
  bodyText: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 24,
  },
  darkBodyText: {
    color: '#FFFFFF',
  },
  caption: {
    fontSize: 14,
    color: Colors.light.tabIconDefault,
    marginTop: 4,
  },
  darkCaption: {
    color: Colors.dark.tabIconDefault,
  },

  // Adventure card styles
  adventureCard: {
    backgroundColor: Colors.light.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: Colors.light.secondary,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  darkAdventureCard: {
    backgroundColor: Colors.dark.surface,
    borderColor: Colors.dark.border,
  },
  adventureHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  adventureIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  adventureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light.text,
    flex: 1,
  },
  darkAdventureTitle: {
    color: Colors.dark.text,
  },
  adventureTimestamp: {
    fontSize: 12,
    color: Colors.light.tabIconDefault,
  },
  darkAdventureTimestamp: {
    color: Colors.dark.tabIconDefault,
  },

  // Form styles
  formContainer: {
    backgroundColor: Colors.light.surface,
    borderRadius: 12,
    padding: 20,
    margin: 10,
    shadowColor: Colors.light.secondary,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  darkFormContainer: {
    backgroundColor: Colors.dark.surface,
    borderColor: Colors.dark.border,
  },
  input: {

    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: Colors.light.text,
    backgroundColor: Colors.light.background,
    marginBottom: 16,
  },
  darkInput: {
    borderColor: Colors.dark.border,
    color: Colors.dark.text,
    backgroundColor: Colors.dark.background,
  },
  iconSelector: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  iconOption: {
    padding: 8,
    margin: 4,
    borderRadius: 8,

  },
  selectedIcon: {
    borderColor: Colors.light.primary,
    backgroundColor: Colors.light.primary + '20',
  },
  darkSelectedIcon: {
    borderColor: Colors.dark.primary,
    backgroundColor: Colors.dark.primary + '20',
  },
  iconText: {
    fontSize: 24,
  },
  button: {
    backgroundColor: Colors.light.primary,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    shadowColor: Colors.light.secondary,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  darkButton: {
    backgroundColor: Colors.dark.primary,
    shadowColor: Colors.dark.secondary,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  // Stats styles
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statCard: {
    backgroundColor: Colors.light.surface,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 8,
    shadowColor: Colors.light.secondary,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  darkStatCard: {
    backgroundColor: Colors.dark.surface,
    borderColor: Colors.dark.border,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.light.primary,
    marginBottom: 4,
  },
  darkStatNumber: {
    color: Colors.dark.primary,
  },
  statLabel: {
    fontSize: 14,
    color: Colors.light.text,
    textAlign: 'center',
  },
  darkStatLabel: {
    color: Colors.dark.text,
  },

  // Daily summary styles
  dailyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.light.tabIconDefault,
  },
  darkDailyHeader: {
    borderBottomColor: Colors.dark.tabIconDefault,
  },
  dailyDate: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light.text,
  },
  darkDailyDate: {
    color: Colors.dark.text,
  },
  dailyCount: {
    fontSize: 16,
    color: Colors.light.primary,
    fontWeight: '600',
  },
  darkDailyCount: {
    color: Colors.dark.primary,
  },

  // Empty state styles
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyIcon: {
    fontSize: 48,
    color: Colors.light.tabIconDefault,
    marginBottom: 16,
  },
  darkEmptyIcon: {
    color: Colors.dark.tabIconDefault,
  },
  emptyText: {
    fontSize: 16,
    color: Colors.light.tabIconDefault,
    textAlign: 'center',
    marginBottom: 8,
  },
  darkEmptyText: {
    color: Colors.dark.tabIconDefault,
  },
  emptySubtext: {
    fontSize: 14,
    color: Colors.light.tabIconDefault,
    textAlign: 'center',
  },
  darkEmptySubtext: {
    color: Colors.dark.tabIconDefault,
  },

  // Insights section styles
  insightsText: {
    fontSize: 16,
    color: Colors.light.text,
    lineHeight: 24,
  },
  darkInsightsText: {
    color: Colors.dark.text,
  },
  insightsLabel: {
    fontSize: 16,
    color: Colors.light.text,
    lineHeight: 24,
    fontWeight: '600',
    marginBottom: 4,
  },
  darkInsightsLabel: {
    color: Colors.dark.text,
  },

  // Delete button styles
  deleteButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.light.error + '20',
    borderWidth: 1,
    borderColor: Colors.light.error,
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkDeleteButton: {
    backgroundColor: Colors.dark.error + '20',
    borderColor: Colors.dark.error,
  },
  deleteButtonText: {
    color: Colors.light.error,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 18,
  },
  darkDeleteButtonText: {
    color: Colors.dark.error,
  },

  // Tab icon styles
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderColor: 'transparent',
  },
  tabIconContainerFocused: {
    backgroundColor: Colors.light.primary + '20',
    borderWidth: 2,
    borderColor: Colors.light.primary,
  },
  darkTabIconContainerFocused: {
    backgroundColor: Colors.dark.primary + '20',
    borderColor: Colors.dark.primary,
  },
  tabIconText: {
    fontSize: 24,
    opacity: 0.6,
  },
  tabIconTextFocused: {
    opacity: 1,
  },

  // Icon selector modal styles
  iconGridItem: {
    width: 60, // Will be calculated dynamically
    height: 60,
    margin: 4,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  iconGridItemSelected: {
    borderColor: Colors.light.primary,
    backgroundColor: Colors.light.primary + '20',
  },
  darkIconGridItemSelected: {
    borderColor: Colors.dark.primary,
    backgroundColor: Colors.dark.primary + '20',
  },
  iconGridText: {
    fontSize: 24,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 4,
    borderRadius: 20,
    backgroundColor: Colors.light.surface,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  darkCategoryButton: {
    backgroundColor: Colors.dark.surface,
    borderColor: Colors.dark.border,
  },
  categoryButtonSelected: {
    backgroundColor: Colors.light.primary,
  },
  darkCategoryButtonSelected: {
    backgroundColor: Colors.dark.primary,
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.text,
  },
  darkCategoryButtonText: {
    color: Colors.dark.text,
  },
  categoryButtonTextSelected: {
    color: '#FFFFFF',
  },
  modalCloseButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginLeft: 20,
  },
  modalCloseButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedIconDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  selectedIconText: {
    fontSize: 48,
    marginRight: 16,
  },

  // Form specific styles
  iconSelectorButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  iconSelectorContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSelectorIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  iconSelectorText: {
    marginBottom: 0,
  },
  iconSelectorArrow: {
    fontSize: 18,
    color: Colors.light.primary,
  },
  placeholderText: {
    color: '#999',
  },
  darkPlaceholderText: {
    color: '#666',
  },

  // Collapsible styles
  collapsibleHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  collapsibleContent: {
    marginTop: 6,
    marginLeft: 24,
  },

  // HelloWave styles
  helloWaveText: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },

  // Icon selector modal layout styles
  modalHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  categorySelectorContainer: {
    justifyContent: 'flex-start',
  },
  categoryScrollView: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  iconGridContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  iconGridList: {
    maxHeight: 300,
  },
});
