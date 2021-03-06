/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
const data = require('./mock-data/test.json');

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';

const platformText = {ios: 'iOS', android: 'Android', web: 'Web' }




export default class ExampleApp extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>
          {data.title}
        </Text>
        <Text style={styles.welcome}>
          Welcome to React Native! ({platformText[Platform.OS]})
        </Text>
        <Text style={styles.instructions}>
          To get started, edit app.js
        </Text>
        <Text style={styles.instructions}>
         {this.props.displayText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
   title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
