import PropTypes from "prop-types";

import { ContainerStyled } from "../../styled";
import {
  FooterContainerStyled,
  FooterCopyrightTextStyled,
  FooterInformationTextStyled,
  FooterStyled,
  FooterWrapperStyled
} from "./styled";

import { ProgressBar } from "../ui";

const validStages = [2, 3, 4];

export const Footer = ({ stage }) => {
  return (
    <FooterContainerStyled>
      {validStages.includes(stage) && <ProgressBar stage={stage} />}
      <FooterStyled>
        <ContainerStyled>
          <FooterWrapperStyled>
            <FooterCopyrightTextStyled>
              © Сервис с онлайн гороскопом и магазином уникальных астрологических товаров. Все
              права защищены 2018-2025. АСТРОГРАМ
            </FooterCopyrightTextStyled>
            <FooterInformationTextStyled>
              Разработано в Астрологическом Центре
            </FooterInformationTextStyled>
          </FooterWrapperStyled>
        </ContainerStyled>
      </FooterStyled>
    </FooterContainerStyled>
  );
};

Footer.propTypes = {
  stage: PropTypes.number
};
