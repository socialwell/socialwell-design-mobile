import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';
function CustomToolTip({ text, position, visible }) {
    const [tootTipVisible, setVisible] = React.useState(visible);
    return (React.createElement(View, { style: styles.container },
        React.createElement(Tooltip, { isVisible: tootTipVisible, contentStyle: styles.contentStyle, content: React.createElement(View, { style: styles.contentStyle },
                React.createElement(Text, { style: styles.text }, text)), onClose: () => setVisible(false) })));
}
export default CustomToolTip;
const styles = StyleSheet.create({
    text: { color: 'white' },
    contentStyle: { backgroundColor: 'black' },
    container: { flex: 1, justifyContent: 'center' },
});
//# sourceMappingURL=CustomToolTip.js.map