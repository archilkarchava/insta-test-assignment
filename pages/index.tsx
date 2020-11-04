import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";
import NumericInput from "components/NumericInput";
import React, { useState } from "react";

const IndexPage = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <Container>
        <InnerContainer>
          <NumericInput
            initialValue={value}
            onChange={(val) => setValue(Number(val))}
            digits={1}
            min={-10}
            max={70}
            step={0.5}
          />
        </InnerContainer>
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
        `}
      />
    </>
  );
};

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 50%;
`;

export default IndexPage;
