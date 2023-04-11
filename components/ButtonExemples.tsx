import React, {Component} from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

class ButtonExemples extends Component {
  _onPressButon() {
    Alert.alert('You tapped the button!');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button onPress={this._onPressButon} title="Ты нажал кнопку!" />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButon}
            title="Погладь кота"
            color="darkorange"
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButon}
            title="Еще кнопка"
            color="greenyellow"
          />
          <Button
            onPress={this._onPressButon}
            title="Кнопочка"
            color="mediumspringgreen"
          />
          <Button onPress={this._onPressButon} title="OK" color="yellow" />
        </View>
      </View>
    );
  }
}

export default ButtonExemples;
