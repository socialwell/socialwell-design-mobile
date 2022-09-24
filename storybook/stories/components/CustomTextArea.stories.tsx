import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {KeyboardTypeOptions, StyleSheet, View} from 'react-native';

import CustomTextArea, {
  InputVersion,
} from '../../../src/components/CustomTextArea';

interface Props {
  keyboardType: KeyboardTypeOptions | undefined;
  version: InputVersion;
  defaultValue: string;
  placeholder: string;
}

function CustomTextAreaStory({
  keyboardType,
  version,
  defaultValue,
  placeholder,
}: Props) {
  const inputRef = React.useRef('');

  return (
    <CustomTextArea
      keyboardType={keyboardType}
      version={version}
      defaultValue={defaultValue}
      placeholder={placeholder}
      inputRef={inputRef}
    />
  );
}

storiesOf('Custom Text Area', module)
  .add('Default', () => (
    <CustomTextAreaStory
      keyboardType="default"
      version="default"
      defaultValue=""
      borderColor="#3182CE"
      placeholder=""
    />
  ))
  .add('Inverted', () => (
    <CustomTextAreaStory
      keyboardType="default"
      version="inverted"
      defaultValue=""
      placeholder=""
    />
  ))
  .add('Outline', () => (
    <CustomTextAreaStory
      keyboardType="default"
      version="outline"
      defaultValue=""
      placeholder=""
    />
  ))
  .add('All', () => (
    <View style={styles.container}>
      <CustomTextAreaStory
        keyboardType="default"
        version="default"
        defaultValue="One"
        placeholder=""
      />
      <CustomTextAreaStory
        keyboardType="default"
        version="inverted"
        defaultValue="Two"
        placeholder=""
      />
      <CustomTextAreaStory
        keyboardType="default"
        version="outline"
        defaultValue="Three"
        placeholder=""
      />
    </View>
  ));

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    flex: 1,
  },
});
