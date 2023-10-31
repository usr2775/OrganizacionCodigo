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
    <ScrollView style={styles.container}>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={handleShowMortyInfo} style={styles.menuOption}>
          <Text style={styles.menuText}>Morty Smith</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShowRickInfo} style={styles.menuOption}>
          <Text style={styles.menuText}>Rick Sanchez</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleShowQR} style={styles.menuOption}>
          <Text style={styles.menuText}>Mi Repositorio</Text>
        </TouchableOpacity>
      </View>
      {displayMyQR ? <QRCodeComponent /> : null}
      {displayMortyInfo ? <MortyInfo /> : null}
      {displayRickInfo ? <RickInfo /> : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#333333', 
    padding: 20,
  },
  menuOption: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  menuText: {
    color: '#66D1A3', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});
