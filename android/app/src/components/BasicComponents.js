import React, { useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

const BasicComponents = () => {
  // Estados para almacenar materia y nota
  const [materia, setMateria] = useState('');
  const [nota, setNota] = useState('');

  // Función para manejar el botón presionado
  const handlePress = () => {
    if (!materia.trim()) {
      Alert.alert('Error', 'El nombre de la materia no puede estar vacío.');
      return;
    }

    if (isNaN(nota) || nota === '' || Number(nota) < 0 || Number(nota) > 100) {
      Alert.alert('Error', 'Ingrese una calificación válida entre 0 y 100.');
      return;
    }

    Alert.alert('Datos ingresados', `Materia: ${materia} \nNota: ${nota}`);
    setMateria(''); // Limpiar el campo de materia
    setNota('');    // Limpiar el campo de nota
  };

  return (
    <ScrollView style={styles.scrollView}>
      <Text>Ingresando varios componentes aquí...</Text>
      <Text>{'\n'}{'\n'}</Text>
      
      <View>
        <Text style={styles.text}>Primera Parcial</Text>
      </View>

      {/* Input para ingresar el nombre de la materia */}
      <View>
        <TextInput
          style={styles.input}
          placeholder="Ingresa nombre de materia"
          value={materia}  // Mostrar el valor de materia en el input
          onChangeText={setMateria}  // Actualizar el estado de materia
        />
      </View>

      {/* Input para ingresar la nota */}
      <View>
        <TextInput
          style={styles.input}
          placeholder="Ingresar nota"
          value={nota}  // Mostrar el valor de nota en el input
          keyboardType="numeric"  // Mostrar teclado numérico
          onChangeText={setNota}  // Actualizar el estado de nota
        />
      </View>
      
      {/* Botón para confirmar la materia y nota ingresadas */}
      <View>
        <Pressable onPress={handlePress}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </Pressable>
      </View>

      {/* Imagen */}
      <View>
        <Image
          source={require('../assets/politecnica.jpg')}
          style={styles.image}
        />
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'blue',
    textAlign: 'center',
    padding: 10,
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
    alignSelf: 'center',
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default BasicComponents;
