import React from 'react';
import {
  ColorValue,
  Image,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
const closeIcon = require('../../assets/image/closeIcon.png');
interface Props {
  backgroundColor?: ColorValue;
  fill?: boolean;
  borderColor?: ColorValue | undefined;
  additionalStyle?: ViewStyle;
  onPress: () => void;
}

function CloseButton({
  backgroundColor,
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
      <Image source={closeIcon} style={styles.img} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  img: {width: 20, height: 20},
});

export default CloseButton;
