import {color, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import ToastMessage from '../../../src/components/ToastMessage';

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
