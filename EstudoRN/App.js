import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'

export default function App() {
  const [vezesClicado, setVezesClicado] = useState(0)

  return (
    <View style={styles.container}>
      <Text>Clique no botão e veja o número aumentar :)</Text>
      <Text>O botão foi clicado {vezesClicado} vezes... </Text>
      <Button 
        onPress={() => {
          setVezesClicado(vezesClicado + 1);
        }}
        title='Clicar mais uma vez'
      />

    </View>
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
