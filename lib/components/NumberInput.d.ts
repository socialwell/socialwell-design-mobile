/// <reference types="react" />
import { ViewStyle } from 'react-native';
interface Props {
    additionalStyle?: ViewStyle;
    onPress: () => void;
}
declare function NumberInput({}: Props): JSX.Element;
export default NumberInput;
