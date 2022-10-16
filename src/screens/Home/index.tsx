import React from 'react';
import { Image, StatusBar, View } from 'react-native';
import { Task } from '../../components/Task/input';
import { styles } from './styles';

import Logo from '../../assets/logo.png';
import { Input } from '../../components/Input';
import { CreateButton } from '../../components/Buttons/CreateButton';

export const Home: React.FC = () => {
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
          <Input />
          <CreateButton />
        </View>
      </View>
    </View>
  )
}