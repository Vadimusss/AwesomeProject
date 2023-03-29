/**
 * @class FlatListBasics
 */

import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:300,
    paddinTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: 'Vaska' },
          { key: 'Murka' },
          { key: 'Pushok' },
          { key: 'Barsik' },
          { key: 'Rizik' },
          { key: 'Dymka' },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  )
};

export default FlatListBasics;
