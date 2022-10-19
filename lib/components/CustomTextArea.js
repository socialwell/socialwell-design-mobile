import { TextInput, StyleSheet, View, } from 'react-native';
import React from 'react';
export default function CustomTextArea({ keyboardType, version, defaultValue, placeholder, inputRef, borderColor, }) {
    const buttonStyle = React.useMemo(() => {
        return {
            borderColor: borderColor,
        };
    }, [borderColor]);
    const textInputStyle = React.useMemo(() => getStyle(version), [version]);
    return (React.createElement(View, { style: styles.container },
        React.createElement(TextInput, { style: [styles.input, buttonStyle, textInputStyle], onChangeText: text => (inputRef.current = text), defaultValue: defaultValue, placeholder: placeholder, keyboardType: keyboardType, numberOfLines: 10, multiline: true })));
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
function getStyle(version) {
    if (version === 'default') {
        return styles.default;
    }
    if (version === 'inverted') {
        return styles.inverted;
    }
    return styles.outline;
}
//# sourceMappingURL=CustomTextArea.js.map