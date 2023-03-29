import React from 'react';
import {Image, ScrollView, Text} from 'react-native';

const logo = {
  uri: 'https://tsm-company.ru/assets/templates/TSM-COMPANY_NEW/img/shop__logo.png',
  width: 132,
  height: 64,
};

const ScrollAndLogos = () => (
  <ScrollView style={{height: 250}}>
    <Text style={{fontSize: 50}}>Куча логотипов</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 40}}>И еще кучка</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 35}}>Еще немного</Text>
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Image source={logo} />
    <Text style={{fontSize: 30}}>Все!</Text>
  </ScrollView>
);

export default ScrollAndLogos;
