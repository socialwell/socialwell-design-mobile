import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import Switch from '../../../src/components/Switch';

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
