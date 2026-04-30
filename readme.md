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


## Flujo de trabajo

El proyecto se desarrolló de forma incremental. 
Primero se creó la app base con Expo y TypeScript. 
Luego se instalaron las dependencias de React Navigation y se configuró el Bottom Tab Navigator con tres pantallas: Inicio, Buscar y Perfil.
Después se agregaron los íconos de Ionicons, el badge con número 5 en la pestaña Buscar y la personalización del label de Perfil como "Mi cuenta". 
Finalmente se incorporaron mejoras visuales, como íconos grandes dentro de cada pantalla y una animación de pulso para el badge.

Cada avance fue registrado en Git mediante commits separados.

## Desarrollado por
Ignacio Vidal