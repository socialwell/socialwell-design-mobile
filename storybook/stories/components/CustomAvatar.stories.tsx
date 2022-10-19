import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import CustomAvatar from '../../../src/components/CustomAvatar';
const user = require('../../../assets/image/userPhoto.png');

storiesOf('CustomAvatar', module)
  .add('large', () => (
    <View style={styles.containerView}>
      <CustomAvatar type="default" text="Hello" userPhoto={user} size={80} />
    </View>
  ))

  .add('small', () => (
    <View style={styles.containerView}>
      <CustomAvatar
        type="default"
        text="Ritik Prasad"
        userPhoto={null}
        size={50}
      />
    </View>
  ))

  .add('image', () => (
    <View style={styles.containerView}>
      <CustomAvatar text="Hello" type="image" userPhoto={null} size={50} />
    </View>
  ));

const styles = StyleSheet.create({
  containerView: {flex: 1, justifyContent: 'center', alignItems: 'center'},

  container: {alignItems: 'center', justifyContent: 'space-around', flex: 1},
});
