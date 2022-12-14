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

export const Task: React.FC<Props> = ({onRemove, onMark,task}) => {
  return (
    <View style={styles.container}>
        <Checkbox onPress={onMark} marked={task.marked} />
        <Text style={[styles.textContent, {textDecorationLine: task.marked ? 'line-through' : 'none'}]}>
          {task.title}
        </Text>
        <DeleteButton onPress={onRemove} />
    </View>
  )
}