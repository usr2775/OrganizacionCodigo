import React from 'react';
import { Text, View, Pressable, Button, StyleSheet } from 'react-native';

interface HeaderProps {
  handleShowMortyInfo: () => void;
  handleShowRickInfo: () => void;
  handleShowQR: () => void;
}

const Header: React.FC<HeaderProps> = ({ handleShowMortyInfo, handleShowRickInfo, handleShowQR }) => {
  return (
    <View>
      <Text style={styles.firsttoprowContainer}>WIKICHIWI RICK/MORTY</Text>
      <View style={styles.rowTopSecondContainer}>
        <Pressable style={{ ...styles.buttonruta, ...styles.shadoxboxing }} onPress={handleShowMortyInfo}>
          <Text style={styles.buttonText}>Morty Smith</Text>
        </Pressable>
        <Pressable style={{ ...styles.buttonruta, ...styles.shadoxboxing }} onPress={handleShowRickInfo}>
          <Text style={styles.buttonText}>Rick Sanchez</Text>
        </Pressable>
        <Button onPress={handleShowQR} title="Mi Repositorio" color="lightgray" accessibilityLabel="Un botón para el código QR" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firsttoprowContainer: {
    backgroundColor: 'gray',
    textAlign: 'center',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    fontSize: 30,
  },
  rowTopSecondContainer: {
    flexDirection: 'row',
    backgroundColor: 'darkgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonruta: {
    width: '50%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  shadoxboxing: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});

export default Header;
