import React from 'react';
import Hello from './Hello';
import { StyleSheet, View } from 'react-native'

export default class App extends React.Component {
  render() {

    return (
      <View styles={styles.wrapper}>
        <Hello/>
      </View>
      );
    
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});