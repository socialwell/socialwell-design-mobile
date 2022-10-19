import React from 'react';
import {Image, StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
const down = require('../../assets/image/down.png');

interface Props {
  arrayData?: Array<any> | any;
}

function SelectDropDown({arrayData}: Props) {
  return (
    <SelectDropdown
      buttonTextStyle={styles.btnTextStyle}
      renderDropdownIcon={() => {
        return <Image source={down} style={styles.img} />;
      }}
      buttonStyle={styles.DropDown}
      data={arrayData}
      onSelect={() => {}}
      buttonTextAfterSelection={selectedItem => {
        return selectedItem.label;
      }}
      rowTextForSelection={item => {
        return item.label;
      }}
    />
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  img: {margin: 10},
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
