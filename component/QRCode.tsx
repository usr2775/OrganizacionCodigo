import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodeComponent = () => {
  return (
    <View style={styles.centerQRCode}>
      <QRCode value="https://github.com/adhernea" />
    </View>
  );
};

const styles = StyleSheet.create({
  centerQRCode: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default QRCodeComponent;
