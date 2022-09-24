import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {text, color, boolean} from '@storybook/addon-knobs';

const CloseButton = require('../../../src/components/CloseButton');
import {StyleSheet, View} from 'react-native';

storiesOf('CloseButton', module)
  .add('Default', () => (
    <View style={styles.containerView}>
      <CloseButton
        text="Hello"
        backgroundColor="#f0f0f0"
        textColor="white"
        fill={true}
        onPress={action('Default CloseButton')}
      />
    </View>
  ))

  .add('with Knob', () => (
    <View style={styles.containerView}>
      <CloseButton
        text={text('Label:', 'Knob CloseButton')}
        backgroundColor={color('Background color:', 'black')}
        borderColor={color('Border color:', 'transparent')}
        fill={boolean('Fill:', true)}
        textColor={color('Text color:', 'white')}
        onPress={action('Black CloseButton')}
      />
    </View>
  ));

const styles = StyleSheet.create({
  containerView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  container: {alignItems: 'center', justifyContent: 'space-around', flex: 1},
});
