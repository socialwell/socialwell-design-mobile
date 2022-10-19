import React from 'react';
import { StyleSheet, TouchableOpacity, Image, } from 'react-native';
const icon = require('../../assets/image/reactDark.png');
function IconButton({ size, backgroundColor, additionalStyle, onPress }) {
    let width;
    let height;
    if (size === 'large') {
        width = 60;
        height = 60;
    }
    else {
        width = 50;
        height = 50;
    }
    const buttonStyle = React.useMemo(() => {
        return {
            backgroundColor: backgroundColor,
            width: width,
            height: height,
        };
    }, [backgroundColor, height, width]);
    return (React.createElement(TouchableOpacity, { style: [styles.wrapper, additionalStyle, buttonStyle], onPress: onPress },
        React.createElement(Image, { source: icon, style: styles.img })));
}
const styles = StyleSheet.create({
    img: { width: 20, height: 20 },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
    },
});
export default IconButton;
//# sourceMappingURL=IconButton.js.map