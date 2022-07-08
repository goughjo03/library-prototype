/// <reference types="react" />
declare module "shared/components/Button" {
    import React from "react";
    interface ButtonProps {
        onClick: () => void;
        children: React.ReactNode;
    }
    const Button: React.FC<ButtonProps>;
    export default Button;
}
declare module "shared/components/TextInput" {
    import React from "react";
    export interface TextInputProps {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        value: string;
        placeholder?: string;
    }
    export const useTextInput: (initialValue?: string) => {
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };
    /**
     *
     * @param onChange - function to call when the text input changes
     * @param value - the current value of the text input
     * @param placeholder - the placeholder text to display in the text input
     * @returns
     */
    const TextInput: ({ onChange, value, placeholder }: TextInputProps) => JSX.Element;
    export default TextInput;
}

