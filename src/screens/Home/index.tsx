import React, { useState } from 'react';
import { Alert, FlatList, Image, ListRenderItem, StatusBar, Text, View } from 'react-native';
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
    const exists = tasks.filter(item => item.title.includes(text))

    if (exists.length > 0) {
      return Alert.alert(
        'Tarefa Existe',
        "Já existe uma tarefa na lista com esse nome!"
      )
    } 

    setTasks(prevState => [...prevState, {marked: false, title: text}]);
    setText('')

  }

  function handleRemove(name: string) {
    Alert.alert(
      'Remover',
      `Deseja realmente remover a tarefa?`,
      [
        {
          text: 'Sim',
          onPress: () => setTasks(prevState => prevState.filter(task => task.title !== name))
        },
        {
          text: 'Não',
          style: 'cancel'
        },
      ]
    )
  }

  function handleMarked(name: string) {
    const newList = [...tasks];
    const ix = newList.findIndex(item => item.title === name);
    newList[ix].marked = !newList[ix].marked
    setTasks(newList);
  }

  const renderItem: ListRenderItem<ITask> = ({ item }) => {
    return (
      <Task 
        task={item} 
        onRemove={() => handleRemove(item.title)} 
        onMark={() => handleMarked(item.title)} 
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
            <CreateButton onPress={handleAdd} />
          </View>
        </View>
        <View style={styles.status}>
          <View style={styles.viewLabel}>
            <Text style={styles.labelCriadas}>Criadas</Text>
            <Tag count={tasks.length} />
          </View>
          <View style={styles.viewLabel}>
            <Text style={styles.labelConcluida}>Concluídas</Text>
            <Tag count={tasks.filter(t => t.marked).length} />
          </View>
        </View>
        
        <FlatList 
          renderItem={renderItem}
          data={tasks}
          keyExtractor={item => item.title}
          ListEmptyComponent={EmptyState}
        />
      </View>
    </View>
  )
}