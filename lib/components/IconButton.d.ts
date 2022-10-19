/// <reference types="react" />
import { ViewStyle, ColorValue } from 'react-native';
interface Props {
    size: string;
    backgroundColor?: ColorValue;
    additionalStyle?: ViewStyle;
    onPress: () => void;
}
declare function IconButton({ size, backgroundColor, additionalStyle, onPress }: Props): JSX.Element;
export default IconButton;
