import React from 'react';
import { StyleSheet, TouchableOpacity, Text, } from 'react-native';
function Tag({ text, backgroundColor, textColor = 'white', borderColor = 'transparent', additionalStyle, onPress, }) {
    const buttonStyle = React.useMemo(() => {
        return {
            backgroundColor: backgroundColor,
            borderWidth: 1,
            borderColor: borderColor,
        };
    }, [backgroundColor, borderColor]);
    return (React.createElement(TouchableOpacity, { style: [styles.wrapper, additionalStyle, buttonStyle], onPress: onPress },
        React.createElement(Text, { style: [{ color: textColor }, styles.text] },
            " ",
            text,
            " ")));
}
const styles = StyleSheet.create({
    text: { fontSize: 18, fontFamily: 'Inter-Medium' },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 2,
        borderRadius: 10,
        paddingHorizontal: 5,
    },
});
export default Tag;
//# sourceMappingURL=Tag.js.map