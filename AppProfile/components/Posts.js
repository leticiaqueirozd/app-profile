import React from 'react';
import { View, Text, Image } from 'react-native';

const Posts = () => {
  return (
    <View>
        <Image source={require('../assets/gatorelax.jpg')} />
        <Text>Legenda da Postagem</Text>
        
        <Image source={require('../assets/amorgato.jpg')} />
        <Text>Legenda da Postagem</Text>
    </View>
  );
};

export default Posts;
