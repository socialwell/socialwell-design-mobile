import React from 'react';

import {RadioButton} from 'react-native-paper';

interface Props {}

function CustomRadioButton({}: Props) {
  const [checked, setChecked] = React.useState('Apple');
  return (
    <RadioButton
      value="Apple"
      status={checked === 'Apple' ? 'checked' : 'unchecked'}
      onPress={() => setChecked('Apple')}
    />
  );
}

export default CustomRadioButton;
