import React from 'react';
import {ViewStyle} from 'react-native';
import NumericInput from 'react-native-numeric-input';
interface Props {
  additionalStyle?: ViewStyle;
  onPress: () => void;
}

function NumberInput({}: Props) {
  return (
    <NumericInput
      type="up-down"
      separatorWidth={100}
      totalWidth={200}
      totalHeight={40}
      rounded={true}
      onChange={value => console.log(value)}
    />
  );
}

export default NumberInput;
