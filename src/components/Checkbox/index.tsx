import React, { useState } from 'react';
import { TouchableOpacity, TouchableOpacityProps} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import theme from '../../../layout/theme';
import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  marked: boolean;
}

export const Checkbox: React.FC<Props> = ({marked, ...rest}) => {
  const [borderColor, setBorderColor] = useState(theme.colors.blue)

  function handlePressIn() {
    setBorderColor(theme.colors.blueDark);
  }

  function handlePressOut() {
    setBorderColor(theme.colors.blue);
  }

  return (
    <>  
      <TouchableOpacity 
        style={[styles.container, {borderColor: marked ? theme.colors.purple : borderColor, backgroundColor: marked ? theme.colors.purple : 'transparent'}]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        {...rest}
      > 
      {marked && (
        <MaterialCommunityIcons name="check" size={12} color={theme.colors.gray100} />
      )}

      </TouchableOpacity>
    </>
  )
}