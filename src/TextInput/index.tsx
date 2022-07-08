import React, { useState } from "react";

export interface TextInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
}

export const useTextInput = (initialValue: string = "") => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
};

/**
 * 
 * @param onChange - function to call when the text input changes
 * @param value - the current value of the text input
 * @param placeholder - the placeholder text to display in the text input
 * @returns 
 */
const TextInput = ({ onChange, value, placeholder }: TextInputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
