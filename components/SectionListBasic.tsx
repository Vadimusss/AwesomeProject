import React from 'react';
import { SectionList, StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:300,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const SectionListBasic = () => (
<View style={styles.container}>
  <SectionList
    sections={[
      {title: 'M', data: ['Vaska', 'Pushok', 'Rizik']},
      {title: 'F', data: ['Murka', 'Dymka', 'Mashka']},
    ]}
    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
    renderSectionHeader={({section}) => <Text style={styles.item}>{section.title}</Text>}
    keyExtractor={item => `basicListEntry-${item}`}
    />
</View>
);

export default SectionListBasic;
