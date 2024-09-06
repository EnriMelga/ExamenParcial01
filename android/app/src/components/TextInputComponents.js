import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

const TextInputComponents = () => {
  const [text, onChangeText] = useState('Texto Carga');
  const [materia, setMateria] = useState(''); // Estado para manejar el nombre de materia
  const [number, onChangeNumber] = useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingrese nombre de materia"
        value={materia}
        onChangeText={setMateria} // Ahora captura el nombre de materia
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Ingrese nota"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputComponents;
