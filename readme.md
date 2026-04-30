# MiAppTabs #


## Descripción
La app implementa un menú inferior con tres pestañas principales:

- Inicio
- Buscar
- Perfil

Cada pantalla tiene un título, una descripción y un color de fondo diferente.

## Funcionalidades implementadas
- Navegación con Bottom Tab Navigator.
- Tres pantallas separadas en componentes.
- Tipado de rutas con TypeScript.
- Íconos con Ionicons usando `@expo/vector-icons`.
- Íconos outline cuando la pestaña está inactiva.
- Íconos rellenos cuando la pestaña está activa.
- Badge con número `5` en la pestaña Buscar.
- Personalización del label de Perfil como `Mi cuenta`.

## Tecnologías usadas
- Expo
- React Native
- TypeScript
- React Navigation
- Bottom Tabs Navigator
- Ionicons

## Instalación
Clonar el repositorio:

```bash
git clone https://github.com/ignaci0vidal/MiAppTabs.git
```

Entrar al proyecto:

```bash
cd MiAppTabs
```

Instalar dependencias:

```bash
npm install
```

Ejecutar la app:

```bash
npx expo start
```

Luego escanear el código QR con Expo Go desde el celular.

## Estructura del proyecto
```text
MiAppTabs
├── App.tsx
├── src
│   ├── screens
│   │   ├── HomeScreen.tsx
│   │   ├── SearchScreen.tsx
│   │   └── ProfileScreen.tsx
│   └── types
│       └── navigation.ts
├── package.json
└── tsconfig.json
```

## Desarrollado por
Ignacio Vidal