import React from 'react';
import {View, Text} from 'react-native';

const HelloWorld = () => {
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Привет World</Text>
    </View>
  );
};

export default HelloWorld;
