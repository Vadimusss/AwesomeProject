/**
 * @class FishTranslator
 */

import React, {useState} from "react";
import { TextInput, Text, View } from "react-native";

const FishTranslator = () => {
  const [text, setText] = useState('');
  return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder={'Type here to translate'}
        onChangeText={(text)=> setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🐟').join(' ')}
      </Text>
    </View>
  );
};

export default FishTranslator;