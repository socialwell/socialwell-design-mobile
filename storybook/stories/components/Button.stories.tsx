import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {text, color, boolean} from '@storybook/addon-knobs';

import Button from '../../../src/components/Button';
import {StyleSheet, View} from 'react-native';

storiesOf('Button', module)
  .add('Default', () => (
    <View style={styles.containerView}>
      <Button
        text="Button"
        backgroundColor="#319795"
        textColor="white"
        fill={true}
        onPress={action('Default button')}
      />
    </View>
  ))

  .add('Icon', () => (
    <View style={styles.containerView}>
      <Button
        text="Button"
        backgroundColor="#319795"
        textColor="white"
        icon={true}
        onPress={action('Icon button')}
      />
    </View>
  ))
  .add('Outline', () => (
    <View style={styles.containerView}>
      <Button
        text="Outline"
        textColor="black"
        borderColor="black"
        fill={false}
        onPress={action('Outline button')}
      />
    </View>
  ))
  .add('All', () => (
    <View style={styles.container}>
      <Button
        text="Default"
        textColor="white"
        onPress={action('Default button')}
      />
      <Button
        text="Inverted"
        backgroundColor="white"
        textColor="black"
        onPress={action('Inverted button')}
      />
      <Button
        text="Outline"
        textColor="black"
        borderColor="black"
        fill={false}
        onPress={action('Outline button')}
      />
    </View>
  ))
  .add('with Knob', () => (
    <View style={styles.containerView}>
      <Button
        text={text('Label:', 'Knob button')}
        backgroundColor={color('Background color:', 'black')}
        borderColor={color('Border color:', 'transparent')}
        fill={boolean('Fill:', true)}
        textColor={color('Text color:', 'white')}
        onPress={action('Black button')}
      />
    </View>
  ));

const styles = StyleSheet.create({
  containerView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  container: {alignItems: 'center', justifyContent: 'space-around', flex: 1},
});
