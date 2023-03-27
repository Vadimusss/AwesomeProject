import React from "react";
import { View, Text } from "react-native";
import { Cat } from "./index";

const Cafe = () => {
  return (
    <View>
      <Text>Наши котики в кафе</Text>
      <Cat name='Vaska'/>
      <Cat name='Murka'/>
      <Cat name='Ryzik'/>
    </View>
  );
};

export default Cafe;