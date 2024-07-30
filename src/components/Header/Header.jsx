import { ContainerStyled } from "../../styled";
import { HeaderStyled } from "./styled";

import { HeaderNav } from "./HeaderNav";

export const Header = () => {
  return (
    <HeaderStyled>
      <ContainerStyled>
        <HeaderNav />
      </ContainerStyled>
    </HeaderStyled>
  );
};
