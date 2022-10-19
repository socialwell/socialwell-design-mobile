import React from 'react';
import { StyleSheet, TouchableOpacity, Image, } from 'react-native';
const closeIcon = require('../../assets/image/closeIcon.png');
function CloseButton({ backgroundColor, borderColor = 'transparent', additionalStyle, onPress, }) {
    const buttonStyle = React.useMemo(() => {
        return {
            backgroundColor: backgroundColor,
            borderWidth: 1,
            borderColor: borderColor,
        };
    }, [backgroundColor, borderColor]);
    return (React.createElement(TouchableOpacity, { style: [styles.wrapper, additionalStyle, buttonStyle], onPress: onPress },
        React.createElement(Image, { source: closeIcon, style: styles.img })));
}
const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 5,
    },
    img: { width: 20, height: 20 },
});
export default CloseButton;
//# sourceMappingURL=CloseButton.js.map