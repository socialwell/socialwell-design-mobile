import React from 'react';
import {storiesOf} from '@storybook/react-native';
import CustomToolTip from '../../../src/components/CustomToolTip';
import {View, StyleSheet} from 'react-native';

storiesOf('CustomToolTip', module)
  .add('top', () => (
    <View style={styles.container}>
      <CustomToolTip
        text="Here’s a regular tooltip with some text inside of it that’s supposed to be substantially large."
        position="top"
        visible={true}
      />
    </View>
  ))

  .add('bottom', () => (
    <View style={styles.container}>
      <CustomToolTip
        position="bottom"
        visible={true}
        text="Here’s a regular tooltip with some text inside of it that’s supposed to be substantially large."
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
