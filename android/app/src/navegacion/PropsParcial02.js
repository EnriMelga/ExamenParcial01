import { Text } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const PropsParcial02 = ({ route }) => {
  // Recibimos los parámetros de materia y nota desde ComponenteParcial01.js
  const { materia, nota } = route.params;

  return (
    <View style={styles.container}>
      {/* Mostramos el texto con los parámetros recibidos */}
      <Text style={styles.text}>
        En la materia: {materia}, recibí la siguiente nota: {nota}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PropsParcial02;
