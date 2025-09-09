/**
 * AdventureForm Component
 * Form for creating new adventure entries
 */

import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useColorScheme } from '../hooks/useColorScheme';
import { AdventureStyles } from '../styles/AdventureStyles';
import { Adventure } from '../types/Adventure';
import { IconSelectorModal } from './IconSelectorModal';

interface AdventureFormProps {
  onSubmit: (adventure: Omit<Adventure, 'id' | 'timestamp' | 'date'>) => void;
}

// Available adventure icons
const ADVENTURE_ICONS = [
  '🚶', '☕', '📚', '🎵', '🍕', '🏃', '🎨', '📱',
  '🌅', '🌙', '🎮', '🍳', '🚗', '✈️', '🏖️', '🎭',
  '🏋️', '🧘', '🎪', '🍰', '🌮', '🎯', '📷', '🎪'
];

export const AdventureForm: React.FC<AdventureFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('🚶');
  const [showIconModal, setShowIconModal] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  const handleSubmit = () => {
    if (title.trim()) {
      onSubmit({
        title: title.trim(),
        icon: selectedIcon,
      });
      setTitle('');
    }
  };

  return (
    <View style={[
      AdventureStyles.formContainer,
      isDark && AdventureStyles.darkFormContainer
    ]}>
      <Text style={[
        AdventureStyles.subtitle,
        isDark && AdventureStyles.darkSubtitle
      ]}>
        Log Your Adventure
      </Text>

      <TextInput
        style={[
          AdventureStyles.input,
          isDark && AdventureStyles.darkInput
        ]}
        placeholder="What did you do today?"
        placeholderTextColor={isDark ? AdventureStyles.darkPlaceholderText.color : AdventureStyles.placeholderText.color}
        value={title}
        onChangeText={setTitle}
        multiline
        maxLength={100}
      />

      <Text style={[
        AdventureStyles.bodyText,
        AdventureStyles.darkBodyText,
        { marginBottom: 12, color: isDark ? '#FFFFFF' : '#000000' }
      ]}>
        Choose an icon:
      </Text>

      <TouchableOpacity
        style={[
          AdventureStyles.input,
          isDark && AdventureStyles.darkInput,
          AdventureStyles.iconSelectorButton
        ]}
        onPress={() => setShowIconModal(true)}
      >
        <View style={AdventureStyles.iconSelectorContent}>
          <Text style={AdventureStyles.iconSelectorIcon}>{selectedIcon}</Text>
          <Text style={[
            AdventureStyles.bodyText,
            isDark && AdventureStyles.darkBodyText,
            AdventureStyles.iconSelectorText,
            { color: isDark ? '#FFFFFF' : '#000000' }
          ]}>
            Tap to choose icon
          </Text>
        </View>
        <Text style={AdventureStyles.iconSelectorArrow}>›</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          AdventureStyles.button,
          isDark && AdventureStyles.darkButton,
          !title.trim() && { opacity: 0.5 }
        ]}
        onPress={handleSubmit}
        disabled={!title.trim()}
      >
        <Text style={AdventureStyles.buttonText}>Log Adventure</Text>
      </TouchableOpacity>

      <IconSelectorModal
        visible={showIconModal}
        onClose={() => setShowIconModal(false)}
        onSelectIcon={setSelectedIcon}
        selectedIcon={selectedIcon}
      />
    </View>
  );
};
