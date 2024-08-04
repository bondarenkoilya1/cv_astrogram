import styled from "@emotion/styled";

export const OrderButtonContainerStyled = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 40px;
`;

export const OrderButtonStyled = styled.button`
  outline: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  color: #fff;
  cursor: pointer;

  ${({ category }) =>
    category === "prev" &&
    `
    background: transparent;
    border: none;
    margin-left: 10px;
  `}

  ${({ category }) =>
    category === "next" &&
    `
    border: 1px double transparent;
    background-image: linear-gradient(#111018, #111018),
    linear-gradient(90deg, #5846fb 0%, #ce66ff 100%);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    border-radius: 100px;
    padding: 14px 30px;
  `}
`;
