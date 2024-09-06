import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TextInput, ScrollView } from 'react-native';
import { ListItem, Text, Button } from '@rneui/themed';

const ComponenteParcial01 = ({ navigation }) => {
  const [materia, setMateria] = useState('');
  const [nota, setNota] = useState('');

  // Lista de componentes
  const componentes = [
    { key: '1', title: 'PropsParcial02', navigateTo: 'PropsParcial02' },
    { key: '2', title: 'AxiosParcial03', navigateTo: 'AxiosParcial03' },
    { key: '3', title: 'AsyncStorangeParcial04', navigateTo: 'AsyncStorangeParcial04' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Título centrado */}
      <Text style={styles.title}>Examen Primera Parcial</Text>

      {/* Campo para ingresar nombre de materia */}
      <TextInput
        style={styles.input}
        placeholder="Ingresar nombre de materia"
        value={materia}
        onChangeText={setMateria}
      />

      {/* Campo para ingresar nota (solo números) */}
      <TextInput
        style={styles.input}
        placeholder="Ingresar nota"
        value={nota}
        onChangeText={setNota}
        keyboardType="numeric" // Asegura que solo números puedan ser ingresados
      />

      {/* Lista de componentes */}
      <FlatList
        data={componentes}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <ListItem bottomDivider onPress={() => navigation.navigate(item.navigateTo)}>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center', // Centra el título
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default ComponenteParcial01;
