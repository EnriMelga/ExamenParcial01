import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input, Button, ListItem, Text } from '@rneui/themed';

const AsyncStorangeParcial04 = () => {
  const [codigo, setCodigo] = useState(''); // Cambiamos key por codigo para permitir ingreso manual
  const [carrera, setCarrera] = useState('');
  const [materia, setMateria] = useState('');
  const [dataList, setDataList] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    listar();
  }, []);

  const listar = async () => {
    try {
      setIsDisabled(false);
      const keys = await AsyncStorage.getAllKeys();
      const items = await AsyncStorage.multiGet(keys);
      setDataList(items.map(([id, value]) => ({ id, value: JSON.parse(value) })));
    } catch (error) {
      console.error('Error loading lista', error);
    }
  };

  const editar = (id, value) => {
    setCodigo(id); // Aquí cargamos el código para permitir la edición
    setCarrera(value.carrera);
    setMateria(value.materia);
    setIsDisabled(true); // Deshabilitamos el campo código
  }

  const guardar = async () => {
    try {
      if (codigo.trim() === '' || carrera.trim() === '' || materia.trim() === '') {
        Alert.alert('Error', 'Todos los campos son obligatorios');
        return;
      }

      const item = JSON.stringify({ carrera, materia });

      if (!isDisabled) { // Guardar nuevo
        await AsyncStorage.setItem(codigo, item);
        setCodigo('');
        setCarrera('');
        setMateria('');
        listar();
        Alert.alert('Éxito', 'Datos guardados');
      } else { // Actualizar existente
        await actualizar();
      }
    } catch (error) {
      Alert.alert('Error', 'Error al guardar los datos');
      console.error(error);
    }
  };

  const actualizar = async () => {
    try {
      const item = JSON.stringify({ carrera, materia });
      await AsyncStorage.setItem(codigo, item);
      setCodigo('');
      setCarrera('');
      setMateria('');
      setIsDisabled(false); // Habilitamos de nuevo el campo código
      listar();
      Alert.alert('Éxito', 'Datos actualizados');
    } catch (error) {
      Alert.alert('Error', 'Error al actualizar los datos');
      console.error(error);
    }
  };

  const eliminar = async (id) => {
    try {
      await AsyncStorage.removeItem(id);
      listar();
      Alert.alert('Éxito', 'Datos eliminados');
    } catch (error) {
      Alert.alert('Error', 'Error al eliminar los datos');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        {/* Input de Código */}
        <Input
          placeholder="Ingrese el código"
          disabled={isDisabled} // Solo deshabilitado cuando se edita
          value={codigo}
          onChangeText={setCodigo}
          style={styles.input}
        />
      </View>
      <View>
        <Input
          placeholder="Ingrese una carrera"
          value={carrera}
          onChangeText={setCarrera}
          style={styles.input}
        />
      </View>
      <View>
        <Input
          placeholder="Ingrese una materia"
          value={materia}
          onChangeText={setMateria}
          style={styles.input}
        />
      </View>
      <Button title={isDisabled ? "Actualizar" : "Guardar"} onPress={guardar} />
      
      <Text h4 style={styles.title}>Lista de Datos:</Text>
      
      {/* Listar datos almacenados */}
      {dataList.map(({ id, value }) => (
        <ListItem key={id} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{`Código: ${id}`}</ListItem.Title>
            <ListItem.Subtitle>{`Carrera: ${value.carrera}`}</ListItem.Subtitle>
            <ListItem.Subtitle>{`Materia: ${value.materia}`}</ListItem.Subtitle>
          </ListItem.Content>
          <Button 
            icon={{ name: 'edit', type: 'font-awesome', size: 15, color: 'white' }} 
            onPress={() => editar(id, value)} 
          />
          <Button 
            icon={{ name: 'trash', type: 'font-awesome', size: 15, color: 'white' }} 
            onPress={() => eliminar(id)} 
            buttonStyle={{ backgroundColor: 'red' }} 
          />
        </ListItem>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 15,
  },
  title: {
    marginVertical: 10,
  },
});

export default AsyncStorangeParcial04;
