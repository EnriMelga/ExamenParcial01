import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { ListItem } from '@rneui/themed';

const AxiosParcial03 = () => {
  const [data, setData] = useState([]);

  // Efecto para hacer la solicitud GET
  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setData(response.data); // Guardamos la data recibida
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      {/* FlatList para mostrar la lista de usuarios */}
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()} // Usamos el ID como clave única
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <ListItem.Content>
              {/* Mostrar el atributo `username` */}
              <ListItem.Title>{item.username}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default AxiosParcial03;
