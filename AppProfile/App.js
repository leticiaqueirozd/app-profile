import React from 'react';
import { View, ScrollView } from 'react-native';
import Profile from './components/Profile';
import Post from './components/Posts';

const App = () => {
  return (
    <ScrollView>
      <View>
        <Profile />
        <Post />
        <Post />
        {/* Adicione quantas postagens desejar */}
      </View>
    </ScrollView>
  );
};

export default App;
