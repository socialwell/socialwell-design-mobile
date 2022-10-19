import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import CustomRadioButton from '../../../src/components/CustomRadioButton';

storiesOf('CustomRadioButton', module)
  .add('Default', () => (
    <View style={styles.containerView}>
      <CustomRadioButton />
    </View>
  ))

  .add('with Knob', () => (
    <View style={styles.containerView}>
      <CustomRadioButton />
    </View>
  ));
const styles = StyleSheet.create({
  containerView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  container: {alignItems: 'center', justifyContent: 'space-around', flex: 1},
});
