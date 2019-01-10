import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';

export default class Hello extends Component {
  render() {
    return (
        <View>
        <Text style={styles.hello}>Hello from Hello.js</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hello: {
    color: 'orange',
    fontSize: 28
  }
})

