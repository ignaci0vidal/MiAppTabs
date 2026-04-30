import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={64} color="#2563EB" />
      <Text style={styles.title}>Inicio</Text>
      <Text style={styles.description}>
        Bienvenido a la pantalla principal de MiAppTabs.
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});