import React from 'react';
import NumericInput from 'react-native-numeric-input';
function NumberInput({}) {
    return (React.createElement(NumericInput, { type: "up-down", separatorWidth: 100, totalWidth: 200, totalHeight: 40, rounded: true, onChange: value => console.log(value) }));
}
export default NumberInput;
//# sourceMappingURL=NumberInput.js.map