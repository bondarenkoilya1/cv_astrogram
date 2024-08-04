import styled from "@emotion/styled";

export const FooterContainerStyled = styled.div`
  margin-top: auto;
`;

export const FooterStyled = styled.footer`
  padding: 40px 0;
  border-top: 1px solid #2d2a41;
  background-color: #1a1925;
  font-family: "SF Pro Text", sans-serif;
  font-size: 14px;
  line-height: 19px;
`;

export const FooterWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1410px) {
    flex-direction: column-reverse;
  }
`;

export const FooterCopyrightTextStyled = styled.p`
  @media screen and (max-width: 1410px) {
    margin-top: 10px;
    text-align: center;
  }
`;

export const FooterInformationTextStyled = styled.p`
  font-weight: 700;

  @media screen and (max-width: 360px) {
    text-align: center;
    font-size: 13px;
  }
`;
