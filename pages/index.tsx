import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";
import NumericInput from "components/NumericInput";
import React, { useState } from "react";

const IndexPage = () => {
  const [digits, setDigits] = useState<number>(3);
  const [min, setMin] = useState<number>(-8);
  const [max, setMax] = useState<number>(40);
  const [step, setStep] = useState<number>(1);
  const [value, setValue] = useState(0);
  return (
    <>
      <Container>
        <InnerContainer>
          <NumericInput
            initialValue={value}
            onChange={(val) => setValue(Number(val))}
            digits={digits}
            min={min}
            max={max}
            step={step}
          />
        </InnerContainer>
        <TweaksContainer>
          <div>
            <h1>Digits</h1>
            <NumericInput
              min={0}
              initialValue={digits}
              onChange={(val) => setDigits(Number(val))}
            />
          </div>
          <div>
            <h1>Min</h1>
            <NumericInput
              initialValue={min}
              onChange={(val) => setMin(Number(val))}
            />
          </div>
          <div>
            <h1>Max</h1>
            <NumericInput
              min={0}
              initialValue={max}
              onChange={(val) => setMax(Number(val))}
            />
          </div>
          <div>
            <h1>Step</h1>
            <NumericInput
              min={0.1}
              initialValue={step}
              onChange={(val) => setStep(Number(val))}
            />
          </div>
        </TweaksContainer>
      </Container>
      <Global
        styles={css`
          html,
          body,
          #__next {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
          }
          h1 {
            margin: 0;
            padding: 0;
            font-size: 2rem;
          }
        `}
      />
    </>
  );
};

const TweaksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  margin-left: 14px;
  margin-right: 14px;
  div {
    margin-left: 5px;
    margin-right: 5px;
    text-align: center;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 50%;
  /* height: 100%; */
`;

export default IndexPage;
