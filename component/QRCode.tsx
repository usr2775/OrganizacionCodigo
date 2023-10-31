import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCodeSvg from 'react-native-qrcode-svg';

const QRCodeComponent = () => {
  return (
    <View style={styles.qrCodeContainer}>
      <Text style={styles.qrCodeLabel}>Escanea el codigo QR para acceder a mi perfil usr2775 de GitHub:</Text>
      <QRCodeSvg value="https://github.com/adhernea" size={300} />
    </View>
  );
};

const styles = StyleSheet.create({
  qrCodeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginRight: 50,
    marginLeft: 50,
  },
  qrCodeLabel: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
    marginBottom: 50
  }
});

export default QRCodeComponent;
