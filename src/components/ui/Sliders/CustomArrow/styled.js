import styled from "@emotion/styled";

export const CustomArrowStyled = styled.button`
  background: #2e2c41;
  position: absolute;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  ${({ type }) => (type === "prev" ? "left: 6%" : "right: 6%")};

  &:hover {
    background: linear-gradient(90deg, #5846fb 0%, #a000ba 100%);
  }
`;
