import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import theme from '../../../layout/theme';
import { styles } from './styles';

export const Input: React.FC<TextInputProps> = ({...rest}) => {
  const [borderColor, setBorderColor] = React.useState(theme.colors.gray700);


  function handleFocus() {
    setBorderColor(theme.colors.purpleDark)
  }

  function handleBlur() {
    setBorderColor(theme.colors.gray700)
  }

  return (
    <View style={[styles.container, {borderColor}]}>
      <TextInput 
        style={styles.input} 
        placeholderTextColor={theme.colors.gray300} 
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest} 
      />
    </View>
  )
}