import styled from "@emotion/styled";
import TextInput from "components/TextInput";
import React, { useState } from "react";
import { clamp } from "utils";

type Props = Omit<
  React.ComponentProps<typeof TextInput>,
  "type" | "initialValue" | "ref"
> & {
  initialValue?: number;
  digits?: number;
};

const NumericInput: React.FC<Props> = ({
  initialValue,
  digits,
  step = 1,
  max,
  min,
  ...rest
}) => {
  if (step < 1)
    throw new Error('"step" should be greater than or equal to one.');
  if (digits && digits < 0)
    throw new Error('"digits" should be greater than or equal to zero.');

  const [value, setValue] = useState(initialValue || 0);

  function handleChange(val: number) {
    const roundedVal = digits ? Number(val.toFixed(digits)) : val;
    setValue(clamp(roundedVal, Number(min), Number(max)));
  }

  return (
    <Container>
      <StyledTextInput
        value={value}
        onChange={(e) => handleChange(Number(e.target.value))}
        type="number"
        step={step}
        max={max}
        min={min}
        {...rest}
      />
      <ButtonContainer>
        <StyledButton onClick={() => handleChange(value + Number(step))}>
          +
        </StyledButton>
        <StyledButton onClick={() => handleChange(value - Number(step))}>
          -
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 4px;
  margin-right: 4px;
`;

const StyledTextInput = styled(TextInput)`
  appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`;

const StyledButton = styled.button`
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.25);
  transition: 0.3s all;
  &:hover {
    background-color: #000000;
    color: #ffffff;
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }
`;

export default NumericInput;
