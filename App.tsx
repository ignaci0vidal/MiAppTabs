import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import HomeStack from './src/navigation/HomeStack';
import ProfileScreen from './src/screens/ProfileScreen';
import SearchScreen from './src/screens/SearchScreen';
import { RootTabParamList } from './src/types/navigation';

const Tab = createBottomTabNavigator<RootTabParamList>();

type TabIconProps = {
  routeName: keyof RootTabParamList;
  color: string;
  size: number;
  focused: boolean;
};

const TabIcon: React.FC<TabIconProps> = ({
  routeName,
  color,
  size,
  focused,
}) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (routeName !== 'Buscar') {
      return;
    }

    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleValue, {
          toValue: 1.25,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [routeName, scaleValue]);

  let iconName: keyof typeof Ionicons.glyphMap;

  if (routeName === 'Inicio') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (routeName === 'Buscar') {
    iconName = focused ? 'search' : 'search-outline';
  } else if (routeName === 'Perfil') {
    iconName = focused ? 'person' : 'person-outline';
  } else {
    iconName = 'help-circle-outline';
  }

  return (
    <View style={styles.iconContainer}>
      <Ionicons name={iconName} size={size} color={color} />

      {routeName === 'Buscar' && (
        <Animated.View
          style={[
            styles.badge,
            {
              transform: [{ scale: scaleValue }],
            },
          ]}
        >
          <Animated.Text style={styles.badgeText}>5</Animated.Text>
        </Animated.View>
      )}
    </View>
  );
};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          tabBarActiveTintColor: '#2563EB',
          tabBarInactiveTintColor: '#6B7280',
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },
          tabBarStyle: {
            height: 64,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarIcon: ({ color, size, focused }) => (
            <TabIcon
              routeName={route.name}
              color={color}
              size={size}
              focused={focused}
            />
          ),
        })}
      >
        <Tab.Screen
          name="Inicio"
          component={HomeStack}
          options={{
            headerShown: false,
          }}
        />

        <Tab.Screen name="Buscar" component={SearchScreen} />

        <Tab.Screen
          name="Perfil"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Mi cuenta',
            title: 'Perfil',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  iconContainer: {
    width: 32,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -10,
    backgroundColor: '#EF4444',
    minWidth: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
});