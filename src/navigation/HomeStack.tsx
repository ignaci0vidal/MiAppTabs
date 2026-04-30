import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaScreen from '../screens/ListaScreen';
import DetalleScreen from '../screens/DetalleScreen';
import { HomeStackParamList } from '../types/navigation';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Lista"
      screenOptions={{
        headerShown: true,
        headerTintColor: '#2563EB',
        headerTitleStyle: {
          fontWeight: '700',
        },
      }}
    >
      <Stack.Screen
        name="Lista"
        component={ListaScreen}
        options={{
          title: 'Inicio',
        }}
      />

      <Stack.Screen
        name="Detalle"
        component={DetalleScreen}
        options={({ route }) => ({
          title: `Detalle #${route.params.id}`,
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;