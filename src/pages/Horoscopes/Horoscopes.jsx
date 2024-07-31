import { ContainerStyled } from "../../styled.js";

import { AddDiscount } from "../../components";

export const Horoscopes = () => {
  return (
    <ContainerStyled>
      <AddDiscount discount={25} currentPrice={563} oldPrice={750} />
    </ContainerStyled>
  );
};
