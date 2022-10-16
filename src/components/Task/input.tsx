import React from 'react';
import { Text, View } from 'react-native';
import { ITask } from '../../interfaces/task.interface';
import { DeleteButton } from '../Buttons/DeleteButton';
import { Checkbox } from '../Checkbox';
import { styles } from './styles';

interface Props {
  onRemove: () => void;
  onMark: () => void
  task: ITask;
}

export const Task: React.FC<Props> = ({onRemove, task}) => {
  return (
    <View style={styles.container}>
        <Checkbox />
        <Text style={styles.textContent}>
          {task.title}
        </Text>
        <DeleteButton />
    </View>
  )
}