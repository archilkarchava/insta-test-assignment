import styled from "@emotion/styled";
import TextInput, { TextInputProps } from "components/TextInput";
import clamp from "lodash/clamp";
import round from "lodash/round";
import React, { useState } from "react";

interface NumericInputProps extends TextInputProps {
  min?: number;
  max?: number;
  step?: number;
  initialValue?: number;
  digits?: number;
}

const NumericInput: React.FC<NumericInputProps> = ({
  initialValue = 0,
  digits,
  step = 1,
  max = Number.MAX_SAFE_INTEGER,
  min = Number.MIN_SAFE_INTEGER,
  onChange,
  ...rest
}) => {
  if (step <= 0)
    throw new Error('"step" should be greater than or equal to one.');
  if (digits && digits < 0)
    throw new Error('"digits" should be greater than or equal to zero.');

  const [value, setValue] = useState(initialValue);

  function handleChange(val: string | number | undefined) {
    const roundedVal = digits ? round(Number(val), digits) : Number(val);
    const clampedVal = clamp(roundedVal, min, max);
    setValue(clampedVal);
    if (onChange) {
      onChange(clampedVal);
    }
  }

  return (
    <Container>
      <StyledTextInput
        value={value}
        onChange={handleChange}
        type="number"
        step={step}
        max={max}
        min={min}
        {...rest}
      />
      <ButtonContainer>
        <StyledButton onClick={() => handleChange(value + step)}>
          +
        </StyledButton>
        <StyledButton onClick={() => handleChange(value - step)}>
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
