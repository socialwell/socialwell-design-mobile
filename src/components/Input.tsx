import React from 'react';
import {StyleSheet, View, ColorValue, Image, TextInput} from 'react-native';

const icon = require('../../assets/image/reactLight.png');
interface Props {
  isIcon: boolean;
  backgroundColor?: ColorValue;
  borderColor?: ColorValue | undefined;
}

function Input({backgroundColor, borderColor = 'transparent', isIcon}: Props) {
  const buttonStyle = React.useMemo(() => {
    return {
      borderColor: borderColor,
      backgroundColor: backgroundColor,
    };
  }, [backgroundColor, borderColor]);

  return (
    <View style={[styles.wrapper, buttonStyle]}>
      {isIcon ? <Image source={icon} style={styles.img} /> : null}
      <TextInput
        style={styles.input}
        placeholderTextColor="#C1C1C1"
        value="Hello"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '80%',
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#C1C1C1',
    borderRadius: 5,
    backgroundColor: '#ffffff',
    alignContent: 'center',
  },
  img: {width: 23, height: 20, marginLeft: 8},
  label: {
    fontSize: 23,
    color: 'black',
  },
  input: {
    height: 40,
    width: '86%',
    fontSize: 18,
    marginTop: 5,
    borderColor: '#C1C1C1',
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
});

export default Input;
