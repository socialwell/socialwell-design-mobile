import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';

import Switch from '../../../src/components/Switch';
import {View, StyleSheet} from 'react-native';

storiesOf('Switch', module)
  .add('Default', () => (
    <View style={styles.container}>
      <Switch onPress={action('Default Switch')} />
    </View>
  ))

  .add('with Knob', () => (
    <View style={styles.container}>
      <Switch onPress={action('Black Switch')} />
    </View>
  ));

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
