import React from 'react';
import {
  ColorValue,
  KeyboardTypeOptions,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';

export type InputVersion = 'default' | 'inverted' | 'outline';

interface Props {
  keyboardType: KeyboardTypeOptions | undefined;
  version: InputVersion;
  defaultValue: string;
  placeholder: string;
  inputRef: React.MutableRefObject<string>;
  borderColor: ColorValue;
}

export default function CustomTextArea({
  keyboardType,
  version,
  defaultValue,
  placeholder,
  inputRef,
  borderColor,
}: Props) {
  const buttonStyle = React.useMemo(() => {
    return {
      borderColor: borderColor,
    };
  }, [borderColor]);
  const textInputStyle = React.useMemo(() => getStyle(version), [version]);

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, buttonStyle, textInputStyle]}
        onChangeText={text => (inputRef.current = text)}
        defaultValue={defaultValue}
        placeholder={placeholder}
        keyboardType={keyboardType}
        numberOfLines={10}
        multiline={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    height: 80,
  },
  default: {
    backgroundColor: '#fff',
    color: 'black',
    borderWidth: 1,
    borderColor: '#3182CE',
    paddingBottom: 50,
  },
  inverted: {
    backgroundColor: '#fff',
    color: '#000',
  },
  outline: {
    borderWidth: 1,
    borderColor: '#000',
    color: '#000',
  },
});

function getStyle(version: InputVersion): ViewStyle {
  if (version === 'default') {
    return styles.default;
  }
  if (version === 'inverted') {
    return styles.inverted;
  }
  return styles.outline;
}
