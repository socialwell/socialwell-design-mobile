import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {text, color, boolean} from '@storybook/addon-knobs';

import CustomAlert2 from '../../../src/components/CustomAlert2';
import {StyleSheet, View} from 'react-native';

storiesOf('CustomAlert2', module)
  .add('warning', () => (
    <View style={styles.containerView}>
      <CustomAlert2 text="warning" backgroundColor="#FEEBCB" visible={true} />
    </View>
  ))

  .add('stop', () => (
    <View style={styles.containerView}>
      <CustomAlert2 text="stop" backgroundColor="#FED7D7" visible={true} />
    </View>
  ))

  .add('normal', () => (
    <View style={styles.containerView}>
      <CustomAlert2 text="normal" backgroundColor="#BEE3F8" visible={true} />
    </View>
  ))
  .add('confirm', () => (
    <View style={styles.containerView}>
      <CustomAlert2 text="confirm" backgroundColor="#C6F6D5" visible={true} />
    </View>
  ))

  .add('with Knob', () => (
    <View style={styles.containerView}>
      <CustomAlert2
        text={text('Label:', 'Knob CustomAlert2')}
        backgroundColor={color('Background color:', 'black')}
        borderColor={color('Border color:', 'transparent')}
        visible={boolean('Fill:', true)}
      />
    </View>
  ));

const styles = StyleSheet.create({
  containerView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  container: {alignItems: 'center', justifyContent: 'space-around', flex: 1},
});
