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
  margin-bottom: 20px;

  ${({ type, isChecked }) => {
    if (type === "gift") {
      return `
        background: linear-gradient(90deg, #5846FB 0%, #A000BA 100%);
        
        & h6 {
          color: #fff;
        }
      `;
    }
    if (isChecked) {
      return `
        background-color: #211D40;
      `;
    }
    return "";
  }};

  @media screen and (max-width: 580px) {
    padding: 20px 15px;
    margin-bottom: 10px;
    width: 48.7%;
  }

  @media screen and (max-width: 350px) {
    width: 100%;
  }
`;

export const ProductCardContentStyled = styled.div`
  flex-grow: 1;
`;

export const ProductCardFooterStyled = styled.div`
  margin-top: auto;
`;

export const ProductCardSubtitleStyled = styled.h6`
  font-size: 16px;
  line-height: 19px;
  color: #7c6dff;
  font-weight: 400;

  @media screen and (max-width: 580px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const ProductCardTitleStyled = styled.h5`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  margin: 10px 0 50px 0;
  max-width: 280px;

  @media screen and (max-width: 580px) {
    font-size: 14px;
    line-height: 16px;
  }

  @media screen and (max-width: 350px) {
    margin-bottom: 20px;
  }
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
