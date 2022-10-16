import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface Props {
  count: number;
}

export const Tag: React.FC<Props> = ({count}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
    </View>
  )
}