import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
    source={require('../assets/images/start.png')}
    style={styles.background}
    resizeMode='cover'
    >
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity style={styles.button} onPress={() => router.push('/mode')}>
        <Text style={styles.btntext}>GET START</Text>
        </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

const styles =StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: 'black',
    width: 200,
    height: 60,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 200,

    shadowColor: 'white',
    shadowOffset: { width: 0, height: 6},
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 10,
  },
  btntext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 10,
  },
});