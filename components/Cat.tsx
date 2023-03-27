import React from "react";
import { Text } from "react-native";

/* const getFullName = (
  firstName: string,
  secondName: string,
  thridName: string
) => {
  return firstName + ' ' + secondName +' ' + thridName;
}; */

type CatProps = {
  name: string,
};

const Cat = (props: CatProps) => <Text>Hello, I am {props.name}!</Text>;

export default Cat;
