import React, { useState } from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import theme from '../../../layout/theme';
import { styles } from './styles';

export const Checkbox: React.FC<TouchableOpacityProps> = ({...rest}) => {
  const [borderColor, setBorderColor] = useState(theme.colors.blue)

  function handlePressIn() {
    setBorderColor(theme.colors.blueDark);
  }

  function handlePressOut() {
    setBorderColor(theme.colors.blue);
  }

  return (
    <TouchableOpacity 
      style={[styles.container, {borderColor}]}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    >

    </TouchableOpacity>
  )
}