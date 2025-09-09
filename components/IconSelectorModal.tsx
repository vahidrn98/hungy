/**
 * IconSelectorModal Component
 * Modal for selecting emojis with organized categories
 */

import React, { useState } from 'react';
import {
  Dimensions,
  FlatList,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useColorScheme } from '../hooks/useColorScheme';
import { AdventureStyles } from '../styles/AdventureStyles';

interface IconSelectorModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectIcon: (icon: string) => void;
  selectedIcon: string;
}

// Organized emoji categories
const EMOJI_CATEGORIES = {
  'Activities': ['🚶', '🏃', '🚴', '🏊', '🏋️', '🧘', '🤸', '🏃‍♀️', '🚶‍♂️', '🏃‍♂️'],
  'Food': ['☕', '🍕', '🍳', '🍰', '🌮', '🍜', '🍔', '🍝', '🥗', '🍣', '🍩', '🍪', '🥤', '🍷', '🍺'],
  'Learning': ['📚', '💻', '📱', '✍️', '🎓', '💡', '🔬', '📊', '📝', '🎯'],
  'Entertainment': ['🎵', '🎨', '🎮', '🎭', '🎪', '📷', '🎬', '🎤', '🎸', '🎹', '🎲', '🧩', '📺', '🎧'],
  'Travel': ['✈️', '🚗', '🏖️', '🏔️', '🌅', '🌙', '🏠', '🏢', '🏪', '🎡', '🏛️', '🌍', '🗺️', '🚂', '🚢'],
  'Nature': ['🌱', '🌸', '🍀', '🌺', '🌻', '🌿', '🌳', '🌲', '☀️', '⛅', '🌧️', '❄️', '🌈', '🌊', '🔥'],
  'Social': ['👥', '💕', '🎉', '🎊', '🎈', '🎁', '💌', '👨‍👩‍👧‍👦', '👫', '💑', '🤝', '👋', '💬', '📞'],
  'Health': ['💊', '🏥', '🩺', '💉', '🧴', '🛁', '🛌', '😴', '😊', '😌', '🧠', '💪', '🫀', '🦷'],
  'Shopping': ['🛒', '💳', '💰', '💎', '🛍️', '🏪', '💸', '💵', '💴', '💶', '💷'],
  'Tech': ['🤖', '🚀', '⚡', '🔋', '💾', '📡', '🛰️', '🔬', '🧪', '⚗️', '🔭', '💻', '⌚'],
  'Sports': ['⚽', '🏀', '🏈', '🎾', '🏐', '🏓', '🏸', '🏒', '⛳', '🎳', '🎯', '🏹', '🥊', '🥋', '🏆'],
  'Other': ['⭐', '🌟', '✨', '💫', '🎆', '🎇', '🕯️', '🕰️', '⏰', '📅', '🗓️', '📌', '📍', '🔍', '🔎']
};

const { width } = Dimensions.get('window');
const ICON_SIZE = (width - 80) / 6; // 6 icons per row with padding

export const IconSelectorModal: React.FC<IconSelectorModalProps> = ({
  visible,
  onClose,
  onSelectIcon,
  selectedIcon
}) => {
  const [selectedCategory, setSelectedCategory] = useState('Activities');
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const renderIcon = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={[
        AdventureStyles.iconGridItem,
        { width: ICON_SIZE, height: ICON_SIZE },
        selectedIcon === item && AdventureStyles.iconGridItemSelected,
        selectedIcon === item && isDark && AdventureStyles.darkIconGridItemSelected
      ]}
      onPress={() => onSelectIcon(item)}
    >
      <Text style={AdventureStyles.iconGridText}>{item}</Text>
    </TouchableOpacity>
  );

  const renderCategoryButton = (category: string) => (
    <TouchableOpacity
      key={category}
      style={[
        AdventureStyles.categoryButton,
        isDark && AdventureStyles.darkCategoryButton,
        selectedCategory === category && AdventureStyles.categoryButtonSelected,
        selectedCategory === category && isDark && AdventureStyles.darkCategoryButtonSelected
      ]}
      onPress={() => setSelectedCategory(category)}
    >
      <Text style={[
        AdventureStyles.categoryButtonText,
        isDark && AdventureStyles.darkCategoryButtonText,
        selectedCategory === category && AdventureStyles.categoryButtonTextSelected
      ]}>
        {category}
      </Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={[
        AdventureStyles.container,
        isDark && AdventureStyles.darkContainer,
        { paddingTop: 60, flex: 1, justifyContent: 'flex-start' }
      ]}>
        {/* Header */}
        <View style={[
          AdventureStyles.headerContainer,
          isDark && AdventureStyles.darkHeaderContainer,
          { paddingTop: 20, paddingBottom: 20 }
        ]}>
          <View style={AdventureStyles.modalHeaderRow}>
            <Text style={[
              AdventureStyles.title,
              isDark && AdventureStyles.darkTitle,
              { marginBottom: 0 }
            ]}>
              Choose Icon
            </Text>
            <TouchableOpacity
              onPress={onClose}
              style={AdventureStyles.modalCloseButton}
            >
              <Text style={AdventureStyles.modalCloseButtonText}>✕</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Category Selector */}
        <View style={AdventureStyles.categorySelectorContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={AdventureStyles.categoryScrollView}
            contentContainerStyle={{ paddingRight: 20, flex: 1 }}
          >
            {Object.keys(EMOJI_CATEGORIES).map(renderCategoryButton)}
          </ScrollView>
        </View>

        {/* Icon Grid */}
        <View style={AdventureStyles.iconGridContainer}>
          <FlatList
            data={EMOJI_CATEGORIES[selectedCategory as keyof typeof EMOJI_CATEGORIES]}
            renderItem={renderIcon}
            numColumns={6}
            keyExtractor={(item) => item}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            style={AdventureStyles.iconGridList}
          />
        </View>

        {/* Selected Icon Display */}
        <View style={[
          AdventureStyles.formContainer,
          isDark && AdventureStyles.darkFormContainer,
          { margin: 16, marginTop: 'auto' }
        ]}>
          <Text style={[
            AdventureStyles.subtitle,
            isDark && AdventureStyles.darkSubtitle,
            { marginBottom: 8 }
          ]}>
            Selected Icon:
          </Text>
          <View style={AdventureStyles.selectedIconDisplay}>
            <Text style={AdventureStyles.selectedIconText}>{selectedIcon}</Text>
            <TouchableOpacity
              style={[
                AdventureStyles.button,
                isDark && AdventureStyles.darkButton,
                { flex: 1 }
              ]}
              onPress={onClose}
            >
              <Text style={AdventureStyles.buttonText}>Use This Icon</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
