import React, { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import QRCodeComponent from './component/QRCode';
import UserInfo from './component/UserInfo';

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);

  const handleShowQR = () => {
    setDisplayMyQR(true);
  };

  const handleShowRepo = () => {
    setDisplayMyQR(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.firsttoprowContainer}>Mi Aplicación de Portafolio</Text>
        <View style={styles.rowTopSecondContainer}>
          <Pressable style={{ ...styles.buttonruta, ...styles.shadoxboxing }} onPress={handleShowQR}>
            <Text style={styles.buttonText}>Mi info</Text>
          </Pressable>
          <Button onPress={handleShowRepo} title="Mi Repositorio" color="lightgray" accessibilityLabel="Un botón para el código QR" />
        </View>
      </View>
      {displayMyQR ? <UserInfo /> : <QRCodeComponent />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
