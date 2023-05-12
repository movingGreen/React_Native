import React, {Component} from 'react';
import {View, Text, Alert, TextInput, Button} from 'react-native';
import WebView from 'react-native-webview';
const localHtmlFile = require('./leafletMapa.html');

export default class LocalPageLoad extends Component {
    render() {
      return (
        <View>
          <View style={{ width: '100%', height: '100%' }}>
            <WebView source={`localHtmlFile`}/>
          </View>
        </View>
      );
    }
  }
