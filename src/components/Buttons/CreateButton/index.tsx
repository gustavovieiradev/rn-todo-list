import React, { useState } from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { styles } from './styles';
import theme from '../../../../layout/theme';

export const CreateButton: React.FC<TouchableOpacityProps> = ({...rest}) => {
  const [backgroundColor, setBackgroundColor] = useState(theme.colors.blueDark)

  function handlePressIn() {
    setBackgroundColor(theme.colors.blue);
  }
  
  function handlePressOut() {
    setBackgroundColor(theme.colors.blueDark);
  }


  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor}]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    >
      <MaterialCommunityIcons name="plus-circle-outline" 
        size={24} 
        color={theme.colors.gray100} 
      />
    </TouchableOpacity>
  )
}