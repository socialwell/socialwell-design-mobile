import { KeyboardTypeOptions, ColorValue } from 'react-native';
import React from 'react';
export declare type InputVersion = 'default' | 'inverted' | 'outline';
interface Props {
    keyboardType: KeyboardTypeOptions | undefined;
    version: InputVersion;
    defaultValue: string;
    placeholder: string;
    inputRef: React.MutableRefObject<string>;
    borderColor: ColorValue;
}
export default function CustomTextArea({ keyboardType, version, defaultValue, placeholder, inputRef, borderColor, }: Props): JSX.Element;
export {};
