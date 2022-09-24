import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ViewStyle,
  ColorValue,
} from 'react-native';
import Toast from 'react-native-toast-message';
interface Props {
  text: string;
  backgroundColor?: ColorValue;
  textColor?: ColorValue;
  borderColor?: ColorValue | undefined;
  additionalStyle?: ViewStyle;
}

function ToastMessage({
  text,
  backgroundColor,
  textColor = 'white',
  borderColor = 'transparent',
  additionalStyle,
}: Props) {
  const buttonStyle = React.useMemo(() => {
    return {
      backgroundColor: backgroundColor,
      borderWidth: 1,
      borderColor: borderColor,
    };
  }, [backgroundColor, borderColor]);

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋',
    });
  };

  return (
    <TouchableOpacity
      style={[styles.wrapper, additionalStyle, buttonStyle]}
      onPress={showToast}>
      <Toast />
      <Text style={[{color: textColor}, styles.textStyle]}> {text} </Text>
    </TouchableOpacity>
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
  textStyle: {fontSize: 18, fontFamily: 'Inter-Medium'},
});

export default ToastMessage;
