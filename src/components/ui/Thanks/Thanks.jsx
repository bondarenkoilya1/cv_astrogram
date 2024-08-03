import {
  ThanksDescriptionStyled,
  ThanksLinkStyled,
  ThanksStyled,
  ThanksTimerStyled,
  ThanksTitleStyled
} from "./styled";

export const Thanks = () => {
  return (
    <ThanksStyled>
      <ThanksTitleStyled>Благодарим за заказ!</ThanksTitleStyled>
      <ThanksDescriptionStyled>
        Ваш гороскоп уже формируется и будет доступен в личном кабинете! Мы пришлем Вам уведомление
        на почту, когда он будет готов!
      </ThanksDescriptionStyled>
      <ThanksTimerStyled>Гороскоп будет готов через 09:52</ThanksTimerStyled>
      <ThanksLinkStyled smallPadding>Перейти в личный кабинет</ThanksLinkStyled>
    </ThanksStyled>
  );
};
