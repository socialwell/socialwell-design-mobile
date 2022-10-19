/// <reference types="react" />
import { ViewStyle, ColorValue } from 'react-native';
interface Props {
    backgroundColor?: ColorValue;
    fill?: boolean;
    borderColor?: ColorValue | undefined;
    additionalStyle?: ViewStyle;
    onPress: () => void;
}
declare function CloseButton({ backgroundColor, borderColor, additionalStyle, onPress, }: Props): JSX.Element;
export default CloseButton;
