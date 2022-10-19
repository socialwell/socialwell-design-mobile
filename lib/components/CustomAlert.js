import React, { useState } from 'react';
import { StyleSheet, Modal, TouchableOpacity, Text, View, Image, } from 'react-native';
const close = require('../../assets/image/closeIcon.png');
function CustomModal({ text, question, visible, onPress }) {
    const [modalVisible, setModalVisible] = useState(visible);
    return (React.createElement(View, null,
        React.createElement(Modal, { animationType: "fade", transparent: true, visible: modalVisible, onRequestClose: () => {
                setModalVisible(!modalVisible);
            } },
            React.createElement(View, { style: styles.modal },
                React.createElement(View, { style: styles.container },
                    React.createElement(Text, { style: styles.modalHeader }, text),
                    React.createElement(TouchableOpacity, { onPress: () => setModalVisible(false) },
                        React.createElement(Image, { source: close, style: styles.img }))),
                React.createElement(Text, { style: styles.warningText }, question),
                React.createElement(View, { style: styles.cont2 },
                    React.createElement(TouchableOpacity, { style: styles.btn1 },
                        React.createElement(Text, { style: styles.btnText1 }, "Cancel")),
                    React.createElement(TouchableOpacity, { onPress: onPress, style: styles.btn },
                        React.createElement(Text, { style: styles.btnText }, "Delete")))))));
}
const styles = StyleSheet.create({
    img: { width: 15, height: 15 },
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 2,
        borderRadius: 10,
        paddingHorizontal: 5,
    },
    cont2: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 30,
    },
    btnText1: {
        fontFamily: 'Inter-Medium',
        color: 'black',
    },
    btn1: {
        marginHorizontal: 5,
        padding: 8,
        backgroundColor: '#E2E8F0',
        borderRadius: 5,
    },
    btnText: {
        fontFamily: 'Inter-Medium',
        color: 'white',
    },
    btn: {
        marginHorizontal: 5,
        padding: 8,
        borderRadius: 5,
        backgroundColor: '#E53E3E',
    },
    modalHeader: {
        fontFamily: 'Inter-Bold',
        fontSize: 16,
        color: '#2D3748',
    },
    warningText: {
        marginTop: 10,
        color: '#2D3748',
        fontSize: 14,
        fontFamily: 'Inter-Medium',
    },
    modal: {
        width: 300,
        height: 150,
        padding: 15,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 5,
        position: 'absolute',
        bottom: 350,
        elevation: 5,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
export default CustomModal;
//# sourceMappingURL=CustomAlert.js.map