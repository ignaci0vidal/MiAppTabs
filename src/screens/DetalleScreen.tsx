import { Ionicons } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { HomeStackParamList } from '../types/navigation';

type DetalleScreenRouteProp = RouteProp<HomeStackParamList, 'Detalle'>;

type Props = {
  route: DetalleScreenRouteProp;
};

const detalles = {
  1: {
    title: 'Receta de pastas',
    description:
      'Detalle de una receta simple para organizar ingredientes, pasos y preparación.',
    icon: 'restaurant',
    color: '#2563EB',
  },
  2: {
    title: 'Lista de compras',
    description:
      'Detalle de productos pendientes para comprar y organizar mejor las tareas.',
    icon: 'cart',
    color: '#EA580C',
  },
  3: {
    title: 'Tareas del día',
    description:
      'Detalle de actividades importantes para planificar el día de forma ordenada.',
    icon: 'checkmark-circle',
    color: '#16A34A',
  },
} as const;

const DetalleScreen: React.FC<Props> = ({ route }) => {
  const { id } = route.params;
  const detalle = detalles[id as keyof typeof detalles];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons name={detalle.icon} size={64} color={detalle.color} />

        <Text style={styles.title}>{detalle.title}</Text>

        <Text style={styles.description}>{detalle.description}</Text>

        <Text style={styles.idText}>ID recibido: {id}</Text>
      </View>
    </View>
  );
};

export default DetalleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#475569',
    marginBottom: 20,
  },
  idText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
  },
});