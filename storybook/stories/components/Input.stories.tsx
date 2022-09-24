import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {color} from '@storybook/addon-knobs';

import Input from '../../../src/components/Input';
import {StyleSheet, View} from 'react-native';

storiesOf('Input', module)
  .add('Default', () => (
    <View style={styles.containers}>
      <Input isIcon={true} borderColor="#3182CE" />
    </View>
  ))
  .add('WithoutIcon', () => (
    <View style={styles.containerView}>
      <Input isIcon={false} borderColor="#3182CE" />
    </View>
  ))

  .add('with Knob', () => (
    <View style={styles.containerView}>
      <Input
        backgroundColor={color('Background color:', 'black')}
        borderColor={color('Border color:', 'transparent')}
        isIcon={true}
      />
    </View>
  ));

const styles = StyleSheet.create({
  containerView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  container: {alignItems: 'center', justifyContent: 'space-around', flex: 1},
  containers: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
