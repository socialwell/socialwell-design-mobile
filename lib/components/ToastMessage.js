import React from 'react';
import { StyleSheet, TouchableOpacity, Text, } from 'react-native';
import Toast from 'react-native-toast-message';
function ToastMessage({ text, backgroundColor, textColor = 'white', borderColor = 'transparent', additionalStyle, }) {
    const buttonStyle = React.useMemo(() => {
        return {
            backgroundColor: backgroundColor,
            borderWidth: 1,
            borderColor: borderColor,
        };
    }, [backgroundColor, borderColor]);
    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Hello',
            text2: 'This is some something 👋',
        });
    };
    return (React.createElement(TouchableOpacity, { style: [styles.wrapper, additionalStyle, buttonStyle], onPress: showToast },
        React.createElement(Toast, null),
        React.createElement(Text, { style: [{ color: textColor }, styles.textStyle] },
            " ",
            text,
            " ")));
}
const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 2,
        borderRadius: 10,
        paddingHorizontal: 5,
    },
    textStyle: { fontSize: 18, fontFamily: 'Inter-Medium' },
});
export default ToastMessage;
//# sourceMappingURL=ToastMessage.js.map