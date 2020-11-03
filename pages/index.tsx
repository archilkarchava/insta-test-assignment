import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";
import NumericInput from "../components/NumericInput";

const IndexPage = () => (
  <>
    <Container>
      <InnerContainer>
        <NumericInput digits={3} min={-2} max={40} step={2} initialValue={4} />
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
