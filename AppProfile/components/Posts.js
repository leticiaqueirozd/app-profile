import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Post = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/gatorelax.jpg')} style={styles.postImage} />
        <Text style={styles.caption}>Gatinho relaxando</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={require('../assets/amorgato.jpg')} style={styles.postImage} />
        <Text style={styles.caption}>Gatinhos fazendo amizade</Text>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  caption: {
    marginTop: 10,
    marginBottom: 25,
    fontSize: 16,
  },
});

export default Post;
