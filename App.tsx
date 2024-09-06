import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importar las pantallas desde sus rutas correctas (sin espacios en los nombres de las carpetas)
import ComponenteParcial01 from './android/app/src/primera parcial/ComponenteParcial01'; // Pantalla principal
import PropsParcial02 from './android/app/src/navegacion/PropsParcial02';                // Otras pantallas
import AxiosParcial03 from './android/app/src/navegacion/AxiosParcial03';
import AsyncStorangeParcial04 from './android/app/src/navegacion/AsyncStorangeParcial04';

// Crear un Stack Navigator
const Stack = createStackNavigator();

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ComponenteParcial01"> {/* ComponenteParcial01 es la pantalla principal */}
        <Stack.Screen
          name="ComponenteParcial01"
          component={ComponenteParcial01}
          options={{ title: 'Examen Primera Parcial' }}  // Título en la barra de navegación
        />
        <Stack.Screen
          name="PropsParcial02"
          component={PropsParcial02}
          options={{ title: 'PropsParcial02' }}
        />
        <Stack.Screen
          name="AxiosParcial03"
          component={AxiosParcial03}
          options={{ title: 'AxiosParcial03' }}
        />
        <Stack.Screen
          name="AsyncStorangeParcial04"
          component={AsyncStorangeParcial04}
          options={{ title: 'AsyncStorangeParcial04' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
