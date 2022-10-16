import React, { useState } from 'react';
import { Image, StatusBar, View } from 'react-native';
import { Task } from '../../components/Task/input';
import { styles } from './styles';

import Logo from '../../assets/logo.png';
import { Input } from '../../components/Input';
import { CreateButton } from '../../components/Buttons/CreateButton';

export const Home: React.FC = () => {

  const [tasks, setTasks] = useState<string[]>([]);
  const [text, setText] = useState('')

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
            <Input onChangeText={setText} value={text} />
          </View>
          <View>
            <CreateButton />
          </View>
        </View>
      </View>
    </View>
  )
}