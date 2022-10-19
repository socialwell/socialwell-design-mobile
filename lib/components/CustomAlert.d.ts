/// <reference types="react" />
interface Props {
    text: string;
    question: string;
    visible?: boolean;
    onPress: () => void;
}
declare function CustomModal({ text, question, visible, onPress }: Props): JSX.Element;
export default CustomModal;
