import {action} from '@storybook/addon-actions';
import {boolean, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import CustomAlert from '../../../src/components/CustomAlert';

storiesOf('CustomAlert', module)
  .add('Default', () => (
    <View style={styles.containerView}>
      <CustomAlert
        text="Delete User"
        question="Are You Sure?"
        visible={true}
        onPress={action('Default CustomAlert')}
      />
    </View>
  ))

  .add('with Knob', () => (
    <View style={styles.containerView}>
      <CustomAlert
        text={text('Label:', 'Knob CustomAlert')}
        question="Are You Sure?"
        visible={boolean('Fill:', true)}
        onPress={action('Black CustomAlert')}
      />
    </View>
  ));

const styles = StyleSheet.create({
  containerView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  container: {alignItems: 'center', justifyContent: 'space-around', flex: 1},
});
