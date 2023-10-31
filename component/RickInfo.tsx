import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const rickHobbies = [
  "Ciencia",
  "Aventuras interdimensionales",
  "Inventar dispositivos locos",
  "Ver programas de televisión",
  "Beber alcohol",
  "Experimentos peligrosos",
  "Explorar el multiverso",
  "Viajar a mundos alienígenas",
];

const RickInfo = () => {
  return (
    <View>
      <View style={styles.row}>
        <Image style={styles.avatar} source={require('../assets/ri.png')} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Descripción sobre Rick</Text>
          <Text>Rick Sánchez es un científico loco, inventor y aventurero interdimensional. Le gusta la ciencia, explorar el multiverso y aventurarse en todo tipo de situaciones peligrosas.</Text>
        </View>
      </View>
      {rickHobbies.map((hobby, index) => (
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
    color: '#66D1A3',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 16,
    backgroundColor: 'gray',
    padding: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dashed',
    textAlign: 'center',
  },
});

export default RickInfo;
