import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {text, color, boolean} from '@storybook/addon-knobs';

import IconButton from '../../../src/components/IconButton';
import {StyleSheet, View} from 'react-native';

storiesOf('IconButton', module)
  .add('Default', () => (
    <View style={styles.containerView}>
      <IconButton
        size="large"
        text="Hello"
        backgroundColor="#E2E8F0"
        textColor="white"
        fill={true}
        onPress={action('Default IconButton')}
      />
    </View>
  ))

  .add('with Knob', () => (
    <View style={styles.containerView}>
      <IconButton
        size="small"
        text={text('Label:', 'Knob IconButton')}
        backgroundColor="#E2E8F0"
        borderColor={color('Border color:', 'transparent')}
        fill={boolean('Fill:', true)}
        textColor={color('Text color:', 'white')}
        onPress={action('Black IconButton')}
      />
    </View>
  ));

const styles = StyleSheet.create({
  containerView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  container: {alignItems: 'center', justifyContent: 'space-around', flex: 1},
});
