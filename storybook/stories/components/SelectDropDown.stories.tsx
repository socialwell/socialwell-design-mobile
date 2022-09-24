import React from 'react';
import {storiesOf} from '@storybook/react-native';
import SelectDropDown from '../../../src/components/SelectDropDown';
import {StyleSheet, View} from 'react-native';

const data = [
  {id: 1, type: 'Hello'},
  {id: 2, type: 'Saionara'},
];

storiesOf('SelectDropDown', module)
  .add('Default', () => (
    <View style={styles.containerView}>
      <SelectDropDown arrayData={data} />
    </View>
  ))

  .add('with Knob', () => (
    <View style={styles.containerView}>
      <SelectDropDown arrayData={data} />
    </View>
  ));

const styles = StyleSheet.create({
  containerView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  container: {alignItems: 'center', justifyContent: 'space-around', flex: 1},
});
