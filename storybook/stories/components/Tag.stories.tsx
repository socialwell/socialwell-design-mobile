import {action} from '@storybook/addon-actions';
import {color, text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import Tag from '../../../src/components/Tag';

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
