import PropTypes from "prop-types";

import {
  ThanksDescriptionStyled,
  ThanksLinkStyled,
  ThanksStyled,
  ThanksTimerStyled,
  ThanksTitleStyled
} from "./styled";

export const Thanks = ({ resetForm }) => {
  return (
    <ThanksStyled>
      <ThanksTitleStyled>Благодарим за заказ!</ThanksTitleStyled>
      <ThanksDescriptionStyled>
        Ваш гороскоп уже формируется и будет доступен в личном кабинете! Мы пришлем Вам уведомление
        на почту, когда он будет готов!
      </ThanksDescriptionStyled>
      <ThanksTimerStyled>Гороскоп будет готов через 09:52</ThanksTimerStyled>
      <ThanksLinkStyled smallpadding="true" onClick={resetForm}>
        Перейти в личный кабинет
      </ThanksLinkStyled>
    </ThanksStyled>
  );
};

Thanks.propTypes = {
  resetForm: PropTypes.func.isRequired
};
