import { ContainerStyled } from "../../styled";
import {
  FooterCopyrightTextStyled,
  FooterInformationTextStyled,
  FooterStyled,
  FooterWrapperStyled
} from "./styled";

export const Footer = () => {
  return (
    <FooterStyled>
      <ContainerStyled>
        <FooterWrapperStyled>
          <FooterCopyrightTextStyled>
            © Сервис с онлайн гороскопом и магазином уникальных астрологических товаров. Все права
            защищены 2018-2024. АСТРОГРАМ
          </FooterCopyrightTextStyled>
          <FooterInformationTextStyled>
            Разработано в Астрологическом Центре
          </FooterInformationTextStyled>
        </FooterWrapperStyled>
      </ContainerStyled>
    </FooterStyled>
  );
};
