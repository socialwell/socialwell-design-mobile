import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, } from 'react-native';
const icons = require('../../assets/image/react.png');
function Button({ text, icon, backgroundColor, textColor = 'white', borderColor = 'transparent', additionalStyle, onPress, }) {
    const buttonStyle = React.useMemo(() => {
        return {
            backgroundColor: backgroundColor,
            borderWidth: 1,
            borderColor: borderColor,
        };
    }, [backgroundColor, borderColor]);
    if (icon) {
        return (React.createElement(TouchableOpacity, { style: [styles.wrapper, additionalStyle, buttonStyle], onPress: onPress },
            React.createElement(Image, { source: icons, style: styles.btn }),
            React.createElement(Text, { style: [{ color: textColor }, styles.textStyle] },
                " ",
                text,
                " ")));
    }
    return (React.createElement(TouchableOpacity, { style: [styles.wrapper, additionalStyle, buttonStyle], onPress: onPress },
        React.createElement(Text, { style: [{ color: textColor }, styles.textStyle] },
            " ",
            text,
            " ")));
}
const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
    },
    textStyle: { fontSize: 22, fontFamily: 'Inter-Medium' },
    btn: { width: 20, height: 20 },
});
export default Button;
//# sourceMappingURL=Button.js.map