import styled from "@emotion/styled";
import React, { ChangeEvent } from "react";

type OmitAttrs = "defaultValue" | "onChange";

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, OmitAttrs> {
  initialValue?: React.InputHTMLAttributes<HTMLInputElement>["defaultValue"];
  onChange?: (value: number | string | undefined) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  initialValue,
  onChange,
  ...rest
}) => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      onChange(e.target.value);
    }
  }
  return (
    <StyledInput
      type="text"
      onChange={handleChange}
      defaultValue={initialValue}
      {...rest}
    />
  );
};

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  font-size: 24px;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.25);
  transition: 0.3s all;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }
`;

export default TextInput;
