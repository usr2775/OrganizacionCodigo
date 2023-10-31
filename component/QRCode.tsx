import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCodeSvg from 'react-native-qrcode-svg';

const QRCodeComponent = () => {
  return (
    <View style={styles.qrCodeContainer}>
      <Text style={styles.qrCodeLabel}>Escanea el código QR para acceder a mi perfil de GitHub</Text>
      <QRCodeSvg value="https://github.com/adhernea" size={200} />
    </View>
  );
};

const styles = StyleSheet.create({
  qrCodeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrCodeLabel: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  }
});

export default QRCodeComponent;
