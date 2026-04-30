import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SearchScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={64} color="#EA580C" />
      <Text style={styles.title}>Buscar</Text>
      <Text style={styles.description}>
        Esta pantalla permite buscar contenido dentro de la aplicación.
      </Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E0',
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