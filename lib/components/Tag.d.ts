/// <reference types="react" />
import { ViewStyle, ColorValue } from 'react-native';
interface Props {
    text: string;
    backgroundColor?: ColorValue;
    textColor?: ColorValue;
    borderColor?: ColorValue | undefined;
    additionalStyle?: ViewStyle;
    onPress: () => void;
}
declare function Tag({ text, backgroundColor, textColor, borderColor, additionalStyle, onPress, }: Props): JSX.Element;
export default Tag;
