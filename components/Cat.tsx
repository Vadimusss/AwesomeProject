import React, {useState} from 'react';
import {Text, View, Image, Button, StyleSheet} from 'react-native';

type CatProps = {
  name: string;
  source: {uri: string};
  size: {
    width: string | number;
    height: string | number;
  };
};

const styles = StyleSheet.create({
  catSayTextStyles: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

const Cat = (props: CatProps) => {
  const [isHungry, setIsHumgry] = useState(true);

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: '100%',
      }}>
      <Image source={props.source} style={props.size} />
      <Text style={styles.catSayTextStyles}>
        Hello, I am {props.name} and I am is {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button
        onPress={() => setIsHumgry(false)}
        disabled={!isHungry}
        title={isHungry ? 'Milk please!' : 'Thanks you!'}
      />
    </View>
  );
};

export default Cat;
