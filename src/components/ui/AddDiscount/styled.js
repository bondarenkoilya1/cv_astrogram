import { VerticalLineStyled } from "../../../styled";
import styled from "@emotion/styled";

import { Image } from "../Image/index.js";

export const AddDiscountStyled = styled.section`
  border-radius: 20px;
  padding: 40px 0 30px 40px;
  background: linear-gradient(273.08deg, #350a6f 0.8%, #390a74 59.11%, #6521a8 97.19%);
  position: relative;

  @media screen and (max-width: 690px) {
    padding-right: 40px;
  }

  @media screen and (max-width: 600px) {
    padding-top: 20px;
    padding-right: 20px;
    padding-left: 20px;
  }
`;

export const AddDiscountTitleStyled = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  max-width: 290px;

  @media screen and (max-width: 690px) {
    max-width: 100%;
  }

  @media screen and (max-width: 600px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

export const AddDiscountDescriptionStyled = styled.p`
  margin-top: 15px;
  font-size: 16px;
  line-height: 19px;
  max-width: 250px;

  @media screen and (max-width: 690px) {
    max-width: 100%;
  }
`;

export const AddDiscountContainerStyled = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    margin-top: 20px;
  }
`;

export const AddDiscountPriceContainer = styled.div`
  display: flex;
  font-weight: 700;

  @media screen and (max-width: 600px) {
    margin-bottom: 30px;
  }
`;

export const AddDiscountPriceStyled = styled.span`
  font-size: 20px;
  line-height: 24px;
`;

export const AddDiscountOldPriceStyled = styled.span`
  font-size: 16px;
  line-height: 19px;
  text-decoration: line-through;
  display: flex;
  align-items: flex-end;
  margin-left: 10px;
`;

export const AddDiscountImageStyled = styled(Image)`
  width: 60%;
  height: auto;
  position: absolute;
  top: 0;
  right: -5%;

  @media screen and (max-width: 760px) {
    top: 6%;
    right: 0;
    width: 50%;
  }

  @media screen and (max-width: 690px) {
    top: 0;
    left: 0;
    width: 80%;
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const AddDiscountSeparator = styled(VerticalLineStyled)`
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
