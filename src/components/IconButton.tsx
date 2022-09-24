import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ColorValue,
  Image,
} from 'react-native';
const icon = require('../../assets/image/reactDark.png');

interface Props {
  size: string;
  backgroundColor?: ColorValue;
  additionalStyle?: ViewStyle;
  onPress: () => void;
}

function IconButton({size, backgroundColor, additionalStyle, onPress}: Props) {
  let width: any;
  let height: any;
  if (size === 'large') {
    width = 60;
    height = 60;
  } else {
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

  return (
    <TouchableOpacity
      style={[styles.wrapper, additionalStyle, buttonStyle]}
      onPress={onPress}>
      <Image source={icon} style={styles.img} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  img: {width: 20, height: 20},
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
});

export default IconButton;
