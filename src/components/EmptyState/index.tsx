import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Text, View } from 'react-native';
import { styles } from './styles';
import theme from '../../../layout/theme';

export const EmptyState: React.FC = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons 
        name="clipboard-text-multiple-outline" 
        size={56} 
        color={theme.colors.gray300}
      />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.description}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}