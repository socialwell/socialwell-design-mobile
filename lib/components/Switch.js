import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Switch } from 'react-native';
function Switchs({ onPress }) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (React.createElement(TouchableOpacity, { style: [styles.wrapper], onPress: onPress },
        React.createElement(Switch, { trackColor: { false: '#767577', true: '#3182CE' }, thumbColor: isEnabled ? 'white' : '#f4f3f4', ios_backgroundColor: "#3e3e3e", onValueChange: toggleSwitch, value: isEnabled })));
}
const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 20,
    },
});
export default Switchs;
//# sourceMappingURL=Switch.js.map