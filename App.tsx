import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MortyInfo from './component/MortyInfo';
import RickInfo from './component/RickInfo';
import QRCodeComponent from './component/QRCode';

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(false);
  const [displayMortyInfo, setDisplayMortyInfo] = useState(false);
  const [displayRickInfo, setDisplayRickInfo] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ScrollView style={isDarkTheme ? styles.containerDark : styles.containerLight}>
      <View style={styles.menuContainer}>
        <TouchableOpacity onPress={() => {setDisplayMyQR(false);setDisplayMortyInfo(true);setDisplayRickInfo(false);}} style={styles.menuOption}>
          <Text style={styles.menuText}>MORTY</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setDisplayMyQR(false);setDisplayMortyInfo(false);setDisplayRickInfo(true);}} style={styles.menuOption}>
          <Text style={styles.menuText}>RICK</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setDisplayMyQR(true);setDisplayMortyInfo(false);setDisplayRickInfo(false);}} style={styles.menuOption}>
          <Text style={styles.menuText}>MiINFO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTheme} style={{ ...styles.menuOption, borderWidth: 1, borderColor: isDarkTheme ? '#66D1A3' : 'white' }}>
          <Text style={styles.menuText2}>TEMA</Text>
        </TouchableOpacity>
      </View>
      {displayMyQR ? <QRCodeComponent /> : null}
      {displayMortyInfo ? <MortyInfo isDarkTheme={isDarkTheme} /> : null}
      {displayRickInfo ? <RickInfo isDarkTheme={isDarkTheme} /> : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerDark: {
    flex: 1,
    backgroundColor: '#191919',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
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
    fontSize: 13,
    fontWeight: 'bold',
  },
  menuText2: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  }
});
