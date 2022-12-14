import React from 'react';
import { StyleSheet, Image } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
const down = require('../../assets/image/down.png');
function SelectDropDown({ arrayData }) {
    return (React.createElement(SelectDropdown, { buttonTextStyle: styles.btnTextStyle, renderDropdownIcon: () => {
            return React.createElement(Image, { source: down, style: styles.img });
        }, buttonStyle: styles.DropDown, data: arrayData, onSelect: () => { }, buttonTextAfterSelection: selectedItem => {
            return selectedItem.label;
        }, rowTextForSelection: item => {
            return item.label;
        } }));
}
const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 2,
        borderRadius: 10,
        paddingHorizontal: 5,
    },
    img: { margin: 10 },
    btnTextStyle: {
        fontSize: 14,
        textAlign: 'left',
    },
    DropDown: {
        backgroundColor: '#ffffff',
        borderColor: '#C1C1C1',
        borderWidth: 1,
        borderRadius: 5,
        width: '90%',
    },
});
export default SelectDropDown;
//# sourceMappingURL=SelectDropDown.js.map