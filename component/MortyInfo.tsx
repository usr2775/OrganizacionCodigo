import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const mortyHobbies = [
  "Aventuras con Rick",
  "Ser arrastrado a situaciones locas",
  "Ser ingenuo y ansioso",
  "Explorar el multiverso",
  "Aprender de su abuelo",
];

const MortyInfo = () => {
  return (
    <View>
      <View style={styles.row}>
        <Image style={styles.avatar} source={require('../assets/mor.png')} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Descripción sobre mí!</Text>
          <Text>Morty Smith: Morty es el nieto de Rick y, en comparación con su abuelo, es bastante ingenuo y ansioso. Si bien es mucho menos inteligente que Rick, suele ser arrastrado a las aventuras y desventuras de su abuelo. </Text>
        </View>
      </View>
      {mortyHobbies.map((hobby, index) => (
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

export default MortyInfo;
