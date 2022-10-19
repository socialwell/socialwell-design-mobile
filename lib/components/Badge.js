import React from 'react';
import { StyleSheet, TouchableOpacity, Text, } from 'react-native';
function Badge({ text, backgroundColor, textColor = 'white', borderColor = 'transparent', additionalStyle, onPress, }) {
    const buttonStyle = React.useMemo(() => {
        return {
            backgroundColor: backgroundColor,
            borderWidth: 1,
            borderColor: borderColor,
        };
    }, [backgroundColor, borderColor]);
    return (React.createElement(TouchableOpacity, { style: [styles.wrapper, additionalStyle, buttonStyle], onPress: onPress },
        React.createElement(Text, { style: [styles.textStyle, { color: textColor }] }, text)));
}
const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        borderRadius: 5,
    },
    textStyle: { fontSize: 22, fontFamily: 'Inter-Bold' },
});
export default Badge;
//# sourceMappingURL=Badge.js.map