import React from 'react';
import { Text, View } from 'react-native';
import { DeleteButton } from '../Buttons/DeleteButton';
import { Checkbox } from '../Checkbox';
import { styles } from './styles';

export const Task: React.FC = () => {
  return (
    <View style={styles.container}>
      
        <Checkbox />
      
        <Text style={styles.textContent}>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </Text>
        
        <DeleteButton />
      
    </View>
  )
}