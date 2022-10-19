/// <reference types="react" />
import { ViewStyle, ColorValue } from 'react-native';
interface Props {
    text: string;
    backgroundColor?: ColorValue;
    textColor?: ColorValue;
    borderColor?: ColorValue | undefined;
    additionalStyle?: ViewStyle;
}
declare function ToastMessage({ text, backgroundColor, textColor, borderColor, additionalStyle, }: Props): JSX.Element;
export default ToastMessage;
