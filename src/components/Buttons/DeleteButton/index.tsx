import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';
import theme from '../../../../layout/theme';

export const DeleteButton: React.FC<TouchableOpacityProps> = ({...rest}) => {
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const [colorIcon, setColorIcon] = useState(theme.colors.gray300);

  function handlePressIn() {
    setBackgroundColor(theme.colors.gray400);
    setColorIcon(theme.colors.danger);
  }

  function handlePressOut() {
    setBackgroundColor('transparent')
    setColorIcon(theme.colors.gray300)
  }

  return (
    <TouchableOpacity 
      style={[styles.container, {backgroundColor}]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    >
      <MaterialCommunityIcons 
        name="trash-can-outline" 
        size={22  } 
        color={colorIcon} 
      />
    </TouchableOpacity>
  )
}