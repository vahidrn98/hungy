/**
 * Adventure Log Color Palette
 * Orange and black theme with proper contrast for accessibility
 */

const primaryOrange = '#FF6B35';
const primaryOrangeDark = '#FF8C42';
const accentBlack = '#2C2C2C';
const accentBlackDark = '#1A1A1A';

export const Colors = {
  light: {
    text: '#2C2C2C',
    background: '#FFFFFF',
    tint: primaryOrange,
    icon: '#666666',
    tabIconDefault: '#666666',
    tabIconSelected: primaryOrange,
    // Adventure Log specific colors
    primary: primaryOrange,
    secondary: accentBlack,
    accent: '#FF8C42',
    surface: '#FFF8F5',
    border: '#E0E0E0',
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FF9800',
  },
  dark: {
    text: '#FFFFFF',
    background: '#1A1A1A',
    tint: primaryOrangeDark,
    icon: '#CCCCCC',
    tabIconDefault: '#CCCCCC',
    tabIconSelected: primaryOrangeDark,
    // Adventure Log specific colors
    primary: primaryOrangeDark,
    secondary: '#FFFFFF',
    accent: primaryOrange,
    surface: '#2C2C2C',
    border: '#404040',
    success: '#66BB6A',
    error: '#EF5350',
    warning: '#FFB74D',
  },
};
