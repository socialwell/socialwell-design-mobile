import React from 'react';
import {
  ColorValue,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface Props {
  text: string;
  backgroundColor?: ColorValue;
  textColor?: ColorValue;
  borderColor?: ColorValue | undefined;
  additionalStyle?: ViewStyle;
  onPress: () => void;
}

function Tag({
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
      <Text style={[{color: textColor}, styles.text]}> {text} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {fontSize: 18, fontFamily: 'Inter-Medium'},
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
});

export default Tag;
