import {action} from '@storybook/addon-actions';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import NumberInput from '../../../src/components/NumberInput';

storiesOf('NumberInput', module)
  .add('Default', () => (
    <View style={styles.containerView}>
      <NumberInput onPress={action('Default NumberInput')} />
    </View>
  ))

  .add('with Knob', () => (
    <View style={styles.containerView}>
      <NumberInput onPress={action('Black NumberInput')} />
    </View>
  ));

const styles = StyleSheet.create({
  containerView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  container: {alignItems: 'center', justifyContent: 'space-around', flex: 1},
});
