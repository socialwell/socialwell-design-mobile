import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {text, color} from '@storybook/addon-knobs';

import Tag from '../../../src/components/Tag';
import {View, StyleSheet} from 'react-native';

storiesOf('Tag', module)
  .add('Default', () => (
    <View style={styles.container}>
      <Tag
        text="Hello"
        backgroundColor="#319795"
        textColor="white"
        onPress={action('Default Tag')}
      />
    </View>
  ))

  .add('with Knob', () => (
    <View style={styles.container}>
      <Tag
        text={text('Label:', 'Knob Tag')}
        backgroundColor={color('Background color:', 'black')}
        borderColor={color('Border color:', 'transparent')}
        textColor={color('Text color:', 'white')}
        onPress={action('Black Tag')}
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
