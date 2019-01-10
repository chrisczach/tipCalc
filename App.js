import React from 'react';
import Hello from './Hello';
import { StyleSheet, View, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input}></TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: '90%',
    borderColor: '#333',
    borderWidth: 1,
    borderBottomWidth: 2,
    padding: 20,
    borderRadius: 5
  }
});
