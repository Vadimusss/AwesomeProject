/**
 * @class CoreComponents
 */

import React from 'react';
import {ScrollView, View, Text, Image, TextInput} from 'react-native';

const CoreComponents = () => {
  return (
    <ScrollView>
      <View>
        <Text>Пробный текст</Text>
        <Image
          source={{
            uri: 'https://tsm-company.ru/assets/templates/TSM-COMPANY_NEW/img/shop__logo.png',
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: 200,
            width: 200,
          }}
        />
      </View>
      <TextInput
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          height: 40,
          borderColor: 'grey',
          borderWidth: 1,
        }}
        defaultValue="Закажи что нибудь"
      />
    </ScrollView>
  );
};

export default CoreComponents;
