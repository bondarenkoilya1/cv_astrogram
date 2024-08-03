import styled from "@emotion/styled";

export const ProgressBarStyled = styled.div`
  width: 100%;
  background-color: #2d2d33;
  overflow: hidden;
`;

export const ProgressStyled = styled.div`
  height: 18px;
  width: ${(props) => props.width};
  transition: all 0.3s ease-in-out;
  background: linear-gradient(90deg, #5846fb 0%, #a000ba 100%);
  border-radius: ${(props) => (props.width === "100%" ? "0" : "0 100px 100px 0")};
`;
