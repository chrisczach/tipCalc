import React from 'react';
import Hello from './Hello';
import { Button, StyleSheet, View, TextInput, Text } from 'react-native';
import { number } from 'prop-types';
import {
  Container,
  Content,
  Header,
  Body,
  Left,
  Right,
  Title
} from 'native-base'

export default class App extends React.Component {
  state = {
    inputValue: '',
    tipPercent: 0.15
  };

  updateCustomTip = customTip =>
    this.setState({ tipPercent: customTip ? parseFloat(customTip) / 100 : 0 });

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

   render() {
    const { inputValue, tipPercent } = this.state;
    const { container, input, buttonGroup, customTip } = styles;
    const tip = (amount = 0, percent = 0.15) => amount * percent;

     return (
       <Container>
         <Header>
           <Left />
           <Body>
             <Title>Header</Title>
           </Body>
           <Right />
         </Header>
         <Content padder>
      <View style={container}>
        <Text>${tip(inputValue, tipPercent).toFixed(2)}</Text>
        <Text>{tipPercent * 100}%</Text>
        <TextInput
          keyboardType="numeric"
          placeholder="0.00"
          onChangeText={inputValue => this.setState({ inputValue })}
          value={inputValue}
          style={input}
        />
        <View style={buttonGroup}>
          <Button
            onPress={() => this.setState({ tipPercent: 0.1 })}
            title="10%"
          />
          <Button
            onPress={() => this.setState({ tipPercent: 0.15 })}
            title="15%"
          />
          <Button
            onPress={() => this.setState({ tipPercent: 0.2 })}
            title="20%"
          />
          <Button
            onPress={() => this.setState({ tipPercent: 0.25 })}
            title="25%"
          />
          <TextInput
            style={customTip}
            keyboardType="numeric"
            placeholder={`${tipPercent * 100}%`}
            value={`${tipPercent ? tipPercent * 100 : ''}`}
            onChangeText={this.updateCustomTip}
          />
        </View>
           </View>
         </Content>
       </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  input: {
    width: '90%',
    borderColor: '#333',
    borderWidth: 1,
    borderBottomWidth: 2,
    padding: 20,
    borderRadius: 5
  },
  buttonGroup: {
    flexDirection: 'row'
  },
  customTip: {
    width: '20%',
    borderColor: '#333',
    borderWidth: 1,
    borderBottomWidth: 2,
    padding: 20,
    borderRadius: 5
  }
});
