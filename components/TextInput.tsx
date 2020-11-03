import styled from "@emotion/styled";
import React, { useState } from "react";

type Props = Omit<JSX.IntrinsicElements["input"], "defaultValue"> & {
  initialValue?: JSX.IntrinsicElements["input"]["defaultValue"];
};

const TextInput: React.FC<Props> = ({ initialValue, ...rest }) => {
  const [value, setValue] = useState(initialValue);
  return (
    <StyledInput
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
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
