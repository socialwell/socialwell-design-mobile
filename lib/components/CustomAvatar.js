import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Avatar } from 'react-native-paper';
function CustomAvatar({ text, type, userPhoto, size }) {
    let icon;
    if (type === 'default') {
        icon = React.createElement(Avatar.Text, { size: size, label: text, style: styles.Avatar });
    }
    if (type === 'image') {
        icon = React.createElement(Image, { source: userPhoto, style: styles.img });
    }
    return React.createElement(View, null, icon);
}
const styles = StyleSheet.create({
    img: { width: 80, height: 80 },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 2,
        borderRadius: 10,
        paddingHorizontal: 5,
    },
    Avatar: {
        backgroundColor: 'cadetblue',
    },
});
export default CustomAvatar;
//# sourceMappingURL=CustomAvatar.js.map