import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {text, color} from '@storybook/addon-knobs';

import Badge from '../../../src/components/Badge';
import {StyleSheet, View} from 'react-native';

storiesOf('Badge', module)
  .add('Default', () => (
    <View style={styles.containerView}>
      <Badge
        text="DEFAULT"
        backgroundColor="#718096"
        textColor="white"
        onPress={action('Default Badge')}
      />
    </View>
  ))

  .add('Inverted', () => (
    <View style={styles.containerView}>
      <Badge
        text="DEFAULT"
        backgroundColor="#EDF2F7"
        textColor="black"
        onPress={action('Inverted Badge')}
      />
    </View>
  ))
  .add('Outline', () => (
    <View style={styles.containerView}>
      <Badge
        text="DEFAULT"
        textColor="#718096"
        borderColor="#718096"
        onPress={action('Outline Badge')}
      />
    </View>
  ))
  .add('All', () => (
    <View style={styles.container}>
      <Badge
        text="Default"
        textColor="white"
        onPress={action('Default Badge')}
      />
      <Badge
        text="Inverted"
        backgroundColor="white"
        textColor="black"
        onPress={action('Inverted Badge')}
      />
      <Badge
        text="Outline"
        textColor="black"
        borderColor="black"
        onPress={action('Outline Badge')}
      />
    </View>
  ))
  .add('with Knob', () => (
    <View style={styles.containerView}>
      <Badge
        text={text('Label:', 'Knob Badge')}
        backgroundColor={color('Background color:', 'black')}
        borderColor={color('Border color:', 'transparent')}
        textColor={color('Text color:', 'white')}
        onPress={action('Black Badge')}
      />
    </View>
  ));

const styles = StyleSheet.create({
  containerView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  container: {alignItems: 'center', justifyContent: 'space-around', flex: 1},
});
