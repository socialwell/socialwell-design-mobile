/// <reference types="react" />
import { ColorValue } from 'react-native';
interface Props {
    isIcon: boolean;
    backgroundColor?: ColorValue;
    borderColor?: ColorValue | undefined;
}
declare function Input({ backgroundColor, borderColor, isIcon }: Props): JSX.Element;
export default Input;
