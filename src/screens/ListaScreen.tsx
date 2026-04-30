import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { HomeStackParamList } from '../types/navigation';

type ListaScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Lista'
>;

type Props = {
  navigation: ListaScreenNavigationProp;
};

const items = [
  {
    id: 1,
    title: 'Receta de pastas',
    description: 'Receta para Spaghetti a la bolognesa para hoy a la noche',
    icon: 'restaurant',
  },
  {
    id: 2,
    title: 'Lista de compras',
    description: 'Productos que faltan por comprar en el supermercado.',
    icon: 'cart',
  },
  {
    id: 3,
    title: 'Tareas del día',
    description: 'Task y recordatorios importantes para organizarse el dìa.',
    icon: 'checkmark-circle',
  },
] as const;

const ListaScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="home" size={56} color="#2563EB" />

      <Text style={styles.title}>Inicio</Text>

      <Text style={styles.description}>
        Seleccioná un elemento para ver su detalle.
      </Text>

      <View style={styles.listContainer}>
        {items.map((item) => (
          <Pressable
            key={item.id}
            style={styles.itemCard}
            onPress={() => navigation.navigate('Detalle', { id: item.id })}
          >
            <Ionicons name={item.icon} size={28} color="#2563EB" />

            <View style={styles.itemTextContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>

            <Ionicons name="chevron-forward" size={22} color="#64748B" />
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default ListaScreen;

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
    marginTop: 12,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  listContainer: {
    width: '100%',
    gap: 12,
  },
  itemCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 3,
  },
  itemTextContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 13,
    color: '#475569',
  },
});