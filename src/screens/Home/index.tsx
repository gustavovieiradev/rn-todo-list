import React, { useState } from 'react';
import { Image, ListRenderItem, StatusBar, Text, View } from 'react-native';
import { Task } from '../../components/Task/input';
import { styles } from './styles';

import Logo from '../../assets/logo.png';
import { Input } from '../../components/Input';
import { CreateButton } from '../../components/Buttons/CreateButton';
import { ITask } from '../../interfaces/task.interface';
import { Tag } from '../../components/Tag';
import { EmptyState } from '../../components/EmptyState';

export const Home: React.FC = () => {

  const [tasks, setTasks] = useState<ITask[]>([]);
  const [text, setText] = useState('')

  function handleAdd() {

  }

  function handleRemove() {

  }

  function handleMarked() {

  }

  const renderItem: ListRenderItem<ITask> = ({ item }) => {
    return (
      <Task 
        task={item} 
        onAdd={handleAdd} 
        onRemove={handleRemove} 
        onMark={handleMarked} 
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar 
        backgroundColor="transparent" 
        barStyle="light-content" 
        translucent 
      />
      <View style={styles.header}>
        <Image source={Logo} />
      </View>
      <View style={styles.content}>
        <View style={styles.form}>
          <View style={styles.input}>
            <Input 
              onChangeText={setText} 
              value={text} 
              placeholder="Adicione uma nova tarefa" 
            />
          </View>
          <View>
            <CreateButton />
          </View>
        </View>
        <View style={styles.status}>
          <View style={styles.viewLabel}>
            <Text style={styles.labelCriadas}>Criadas</Text>
            <Tag count={0} />
          </View>
          <View style={styles.viewLabel}>
            <Text style={styles.labelConcluida}>Criadas</Text>
            <Tag count={0} />
          </View>
        </View>
        <EmptyState />
      </View>
    </View>
  )
}