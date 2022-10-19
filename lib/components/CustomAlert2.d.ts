/// <reference types="react" />
import { ColorValue } from 'react-native';
interface Props {
    text: string;
    backgroundColor?: ColorValue;
    visible?: boolean;
}
declare function CustomAlert2({ text, backgroundColor, visible }: Props): JSX.Element;
export default CustomAlert2;
