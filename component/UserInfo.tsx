import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const hobbies = [
  "Salir a pasear",
  "Senderismo",
  "Ir a la playita",
  "Domingos de misa",
  "La guitarrita",
  "El monte con lluvia",
  "Viajar",
  "Música variadita",
  "Anime",
  "Ducharme",
  "Videojuegos",
  "Ir de cenar romántica",
];

const UserInfo = () => {
  return (
    <View>
      <View style={styles.row}>
        <Image style={styles.avatar} source={require('../assets/SofyanAmrabat.jpg')} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Descripción sobre mí!</Text>
          <Text>Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar prácticas para mis queridos alumnos</Text>
        </View>
      </View>
      {hobbies.map((hobby, index) => (
        <Text key={index} style={styles.hobby}>
          {hobby}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  descriptionContainer: {
    margin: 10,
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 10,
    width: '70%',
  },
  descriptionTitle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
  },
  hobby: {
    color: 'darkred',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 16,
    backgroundColor: 'silver',
    padding: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dashed',
    textAlign: 'center',
  },
});

export default UserInfo;
