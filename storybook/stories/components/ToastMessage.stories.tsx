import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {text, color} from '@storybook/addon-knobs';

import ToastMessage from '../../../src/components/ToastMessage';
import {View, StyleSheet} from 'react-native';

storiesOf('ToastMessage', module)
  .add('Default', () => (
    <View style={styles.container}>
      <ToastMessage text="Toast" backgroundColor="#319795" textColor="white" />
    </View>
  ))

  .add('with Knob', () => (
    <View style={styles.container}>
      <ToastMessage
        text={text('Label:', 'Knob ToastMessage')}
        backgroundColor={color('Background color:', 'black')}
        borderColor={color('Border color:', 'transparent')}
        textColor={color('Text color:', 'white')}
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
