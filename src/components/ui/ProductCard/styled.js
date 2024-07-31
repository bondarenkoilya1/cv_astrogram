import styled from "@emotion/styled";

export const ProductCardStyled = styled.li`
  cursor: pointer;
  width: 48.5%;
  background-color: #1e1c2d;
  padding: 30px;
  border-radius: 20px;
  user-select: none;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //  remove, add to two last children
  margin-bottom: 20px;
`;

export const ProductCardContentStyled = styled.div`
  flex-grow: 1;
`;

export const ProductCardFooterStyled = styled.div`
  margin-top: auto;
`;

export const ProductCardSubtitleStyled = styled.div`
  font-size: 16px;
  line-height: 19px;
  color: #7c6dff;
`;

export const ProductCardTitleStyled = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  margin: 10px 0 50px 0;
`;

export const ProductCardContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const ProductCardPriceStyled = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  color: #ff3981;
`;
