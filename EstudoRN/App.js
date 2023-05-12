import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react'
import { MapView, UrlTile} from 'react-native-maps';

import * as Location from 'expo-location';

 const App = () => {

  return (
    <View>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <Text>123</Text>
      </View>
  );
};

export default App