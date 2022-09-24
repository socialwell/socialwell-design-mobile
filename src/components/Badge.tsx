import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewStyle,
  ColorValue,
} from 'react-native';

interface Props {
  text: string;
  backgroundColor?: ColorValue;
  textColor?: ColorValue;
  borderColor?: ColorValue | undefined;
  additionalStyle?: ViewStyle;
  onPress: () => void;
}

function Badge({
  text,
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

  return (
    <TouchableOpacity
      style={[styles.wrapper, additionalStyle, buttonStyle]}
      onPress={onPress}>
      <Text style={[styles.textStyle, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 5,
  },
  textStyle: {fontSize: 22, fontFamily: 'Inter-Bold'},
});

export default Badge;
