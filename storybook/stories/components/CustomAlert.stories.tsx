import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {text, boolean} from '@storybook/addon-knobs';

import CustomAlert from '../../../src/components/CustomAlert';
import {StyleSheet, View} from 'react-native';

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
