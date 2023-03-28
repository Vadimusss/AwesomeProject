import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Cat, FishTranslator} from './index';

const styles = StyleSheet.create({
  cafeTitleTextStyles: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

const Cafe = () => {
  return (
    <View>
      <Text style={styles.cafeTitleTextStyles}>Наши котики в кафе:</Text>
      <Cat
        name="Vaska"
        source={{
          uri: 'https://natalyland.ru/wp-content/uploads/1/1/8/118c2c4bf1e1106f57d640e22759b3cd.jpeg',
        }}
        // eslint-disable-next-line react-native/no-inline-styles
        size={{height: '100%'}}
      />
      <FishTranslator />
    </View>
  );
};

export default Cafe;
