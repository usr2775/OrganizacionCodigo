import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MortyInfo from './component/MortyInfo';
import RickInfo from './component/RickInfo';
import QRCodeComponent from './component/QRCode';

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(false);
  const [displayMortyInfo, setDisplayMortyInfo] = useState(false);
  const [displayRickInfo, setDisplayRickInfo] = useState(false);

  const handleShowQR = () => {
    setDisplayMyQR(true);
    setDisplayMortyInfo(false);
    setDisplayRickInfo(false);
  };

  const handleShowMortyInfo = () => {
    setDisplayMyQR(false);
    setDisplayMortyInfo(true);
    setDisplayRickInfo(false);
  };

  const handleShowRickInfo = () => {
    setDisplayMyQR(false);
    setDisplayMortyInfo(false);
    setDisplayRickInfo(true);
  };

  return (
    <ScrollView style={{ height: '50%' }} contentContainerStyle={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={handleShowMortyInfo} style={styles.menuOption}>
          <Text>Morty Smith</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShowRickInfo} style={styles.menuOption}>
          <Text>Rick Sanchez</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShowQR} style={styles.menuOption}>
          <Text>Mi Repositorio</Text>
        </TouchableOpacity>
      </View>
      {displayMyQR ? <QRCodeComponent /> : null}
      {displayMortyInfo ? <MortyInfo /> : null}
      {displayRickInfo ? <RickInfo /> : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkgray',
  },
  menuOption: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    height: '15%',
    paddingTop: 50,
    width: '100%',
  },
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
