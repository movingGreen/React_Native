import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'
import { WebView } from "react-native-webview";
import html_script from './html_script';

import * as Location from 'expo-location';


async function getLocation() {
  const { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') {
    alert('Permission to access location was denied');
    return;
  }

  const location = await Location.getCurrentPositionAsync({});
  console.log(location);
}




export default function App() {
  const [vezesClicado, setVezesClicado] = useState(0)
  getLocation()

  
  return (
    <>
      <View style={styles.container}>
        <Text>Clique no botão e veja o número aumentar :)</Text>
        <Text>O botão foi clicado {vezesClicado} vezes... </Text>
        <Button 
          onPress={() => {
            setVezesClicado(vezesClicado + 1);
          }}
          title='Clicar mais uma vez'
        />
        <Button
          title='próxima tela'
        />
      </View>
      <WebView source={{html: html_script}} style={{ flex: 1 }} />
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
