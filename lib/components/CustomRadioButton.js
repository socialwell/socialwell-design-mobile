import React from 'react';
import { RadioButton } from 'react-native-paper';
function CustomRadioButton({}) {
    const [checked, setChecked] = React.useState('Apple');
    return (React.createElement(RadioButton, { value: "Apple", status: checked === 'Apple' ? 'checked' : 'unchecked', onPress: () => setChecked('Apple') }));
}
export default CustomRadioButton;
//# sourceMappingURL=CustomRadioButton.js.map