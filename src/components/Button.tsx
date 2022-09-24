import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  ViewStyle,
  ColorValue,
} from 'react-native';
const icons = require('../../assets/image/react.png');
interface Props {
  text: string;
  backgroundColor?: ColorValue;
  textColor?: ColorValue;
  borderColor?: ColorValue | undefined;
  additionalStyle?: ViewStyle;
  onPress: () => void;
  icon?: boolean;
}

function Button({
  text,
  icon,
  backgroundColor,
  textColor = 'white',
  borderColor = 'transparent',
  additionalStyle,
  onPress,
}: Props) {
  const buttonStyle = React.useMemo(() => {
    return {
      backgroundColor: backgroundColor,
      borderWidth: 1,
      borderColor: borderColor,
    };
  }, [backgroundColor, borderColor]);

  if (icon) {
    return (
      <TouchableOpacity
        style={[styles.wrapper, additionalStyle, buttonStyle]}
        onPress={onPress}>
        <Image source={icons} style={styles.btn} />
        <Text style={[{color: textColor}, styles.textStyle]}> {text} </Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.wrapper, additionalStyle, buttonStyle]}
      onPress={onPress}>
      <Text style={[{color: textColor}, styles.textStyle]}> {text} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  textStyle: {fontSize: 22, fontFamily: 'Inter-Medium'},
  btn: {width: 20, height: 20},
});

export default Button;
