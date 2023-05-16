import React from 'react';
import { View, Text, Image } from 'react-native';

const Profile = () => {
    return (
      <View>
        <Image source={require('../assets/profile.jpg')} />
        <Text>Nome do Usuário</Text>
        <Text>Biografia do Usuário</Text>
      </View>
    );
  };
  
  export default Profile;
  