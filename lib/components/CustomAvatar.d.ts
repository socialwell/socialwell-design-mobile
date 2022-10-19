/// <reference types="react" />
interface Props {
    text: string;
    type: string;
    userPhoto: any;
    size?: number;
}
declare function CustomAvatar({ text, type, userPhoto, size }: Props): JSX.Element;
export default CustomAvatar;
