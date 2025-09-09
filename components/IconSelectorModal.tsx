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
import { Colors } from '../constants/Colors';
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
        {
          width: ICON_SIZE,
          height: ICON_SIZE,
          margin: 4,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 2,
          borderColor: selectedIcon === item
            ? Colors.light.primary
            : 'transparent',
          backgroundColor: selectedIcon === item
            ? Colors.light.primary + '20'
            : 'transparent',
        },
        isDark && {
          borderColor: selectedIcon === item
            ? Colors.dark.primary
            : 'transparent',
          backgroundColor: selectedIcon === item
            ? Colors.dark.primary + '20'
            : 'transparent',
        }
      ]}
      onPress={() => onSelectIcon(item)}
    >
      <Text style={{ fontSize: 24 }}>{item}</Text>
    </TouchableOpacity>
  );

  const renderCategoryButton = (category: string) => (
    <TouchableOpacity
      key={category}
      style={[
        {
          paddingHorizontal: 16,
          paddingVertical: 8,
          marginHorizontal: 4,
          borderRadius: 20,
          backgroundColor: selectedCategory === category
            ? Colors.light.primary
            : Colors.light.surface,
          borderWidth: 1,
          borderColor: Colors.light.border,
        },
        isDark && {
          backgroundColor: selectedCategory === category
            ? Colors.dark.primary
            : Colors.dark.surface,
          borderColor: Colors.dark.border,
        }
      ]}
      onPress={() => setSelectedCategory(category)}
    >
      <Text style={[
        {
          fontSize: 14,
          fontWeight: '600',
          color: selectedCategory === category
            ? '#FFFFFF'
            : Colors.light.text,
        },
        isDark && {
          color: selectedCategory === category
            ? '#FFFFFF'
            : Colors.dark.text,
        }
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
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={[
              AdventureStyles.title,
              isDark && AdventureStyles.darkTitle,
              { marginBottom: 0 }
            ]}>
              Choose Icon
            </Text>
            <TouchableOpacity
              onPress={onClose}
              style={{
                paddingVertical: 8,
                paddingHorizontal: 14,
                borderRadius: 20,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              <Text style={{ color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' }}>✕</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Category Selector */}
        <View style={{ justifyContent: 'flex-start' }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ paddingVertical: 12, paddingHorizontal: 16, }}
            contentContainerStyle={{ paddingRight: 20, flex: 1 }}
          >
            {Object.keys(EMOJI_CATEGORIES).map(renderCategoryButton)}
          </ScrollView>
        </View>

        {/* Icon Grid */}
        <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
          <FlatList
            data={EMOJI_CATEGORIES[selectedCategory as keyof typeof EMOJI_CATEGORIES]}
            renderItem={renderIcon}
            numColumns={6}
            keyExtractor={(item) => item}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
            style={{ maxHeight: 300 }}
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
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 16
          }}>
            <Text style={{ fontSize: 48, marginRight: 16 }}>{selectedIcon}</Text>
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
