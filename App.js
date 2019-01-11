import React from 'react';
import Hello from './Hello';
import { Button, StyleSheet, View, TextInput, Text } from 'react-native';
import { number } from 'prop-types';

export default class App extends React.Component {
  state = {
    inputValue: '',
    tipPercent: 0.15
  };

  render() {
    const { inputValue, tipPercent } = this.state;
    const { container, input } = styles;
    const tip = (amount = 0, percent = 0.15) => amount * percent;

    return (
      <View style={container}>
        <Text>${tip(inputValue, tipPercent).toFixed(2)}</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="0.00"
          onChangeText={inputValue => this.setState({ inputValue })}
          value={inputValue}
          style={input}
        />
        <View>
          <Button
          />
          <Button />
        </View>
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
