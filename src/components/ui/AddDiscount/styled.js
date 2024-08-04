import styled from "@emotion/styled";

import discount from "../../../assets/images/add-discount/25-percents.png";

export const AddDiscountStyled = styled.section`
  border-radius: 20px;
  padding: 40px 0 30px 40px;
  background:
    url(${discount}) right -180px top -125px / cover,
    linear-gradient(273.08deg, #350a6f 0.8%, #390a74 59.11%, #6521a8 97.19%);
  background-repeat: no-repeat;
`;

export const AddDiscountTitleStyled = styled.h3`
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
  max-width: 290px;
`;

export const AddDiscountDescriptionStyled = styled.p`
  margin-top: 15px;
  font-size: 16px;
  line-height: 19px;
  max-width: 250px;
`;

export const AddDiscountContainerStyled = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;

export const AddDiscountPriceContainer = styled.div`
  display: flex;
  font-weight: 700;
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
