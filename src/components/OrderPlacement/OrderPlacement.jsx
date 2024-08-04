import React from "react";
import PropTypes from "prop-types";

import {
  OrderCardInformationCheckboxStyled,
  OrderCardInformationListStyled,
  OrderCardRecipientContainerStyled,
  OrderCardRecipientHeaderStyled,
  OrderCardRecipientHeaderTitleStyled,
  OrderCardRecipientListStyled,
  OrderPlacementStyled,
  OrderPlacementTitleStyled,
  TextWithIconStyled
} from "./styled";

import { ReactComponent as CalendarIcon } from "../../assets/images/calendar.svg";
import { ReactComponent as ClockIcon } from "../../assets/images/clock.svg";
import { ReactComponent as MapIcon } from "../../assets/images/map.svg";
import { ReactComponent as UserIcon } from "../../assets/images/user.svg";
import { paymentMethodRadioGroup } from "../../data/index.js";
import { Button, OrderButtonGroup, OrderCard, RadioGroup, TextWithIcon } from "../ui";

const OrderCardRecipientHeader = ({ userName, userSex }) => {
  return (
    <OrderCardRecipientHeaderStyled>
      <OrderCardRecipientHeaderTitleStyled>{userName}</OrderCardRecipientHeaderTitleStyled>
      <TextWithIcon icon={<UserIcon />} fontWeight={700}>
        {userSex}
      </TextWithIcon>
    </OrderCardRecipientHeaderStyled>
  );
};

const OrderCardInformationHeader = () => {
  return (
    <OrderCardRecipientHeaderTitleStyled>
      Любовный гороскоп для одиноких
    </OrderCardRecipientHeaderTitleStyled>
  );
};

const recipientArray = [
  { icon: <CalendarIcon />, text: "15 октября 1997" },
  { icon: <ClockIcon />, text: "Время не известно" },
  { icon: <MapIcon />, text: "Россия, Свердловская область, Екатеринбург" }
];

export const OrderPlacement = ({ prevStep, nextStep }) => {
  const userData = JSON.parse(localStorage.getItem("data"));

  const userName = userData.name;
  const userSex = userData.sex;

  const productsMain = userData.productsMain;
  const productsAdditional = userData.productsAdditional;
  const allProducts = [...productsMain, ...productsAdditional];

  const { productsChecked, productsUnchecked } = allProducts.reduce(
    (acc, { title, isChecked }) => {
      if (isChecked) {
        acc.productsChecked.push(title);
      } else {
        acc.productsUnchecked.push(title);
      }

      return acc;
    },
    { productsChecked: [], productsUnchecked: [] }
  );

  return (
    <OrderPlacementStyled>
      <OrderPlacementTitleStyled>Оформление гороскопа</OrderPlacementTitleStyled>
      <OrderCard
        title="Получатель"
        headerContent={<OrderCardRecipientHeader userName={userName} userSex={userSex} />}>
        <OrderCardRecipientContainerStyled>
          <OrderCardRecipientListStyled>
            {recipientArray.map(({ icon, text }) => (
              <TextWithIconStyled icon={icon} key={crypto.randomUUID()}>
                {text}
              </TextWithIconStyled>
            ))}
          </OrderCardRecipientListStyled>
          <Button>Редактировать</Button>
        </OrderCardRecipientContainerStyled>
      </OrderCard>
      <OrderCard title="Заказ" headerContent={<OrderCardInformationHeader />}>
        <OrderCardRecipientContainerStyled>
          <OrderCardInformationListStyled>
            {productsChecked.map((text) => (
              <OrderCardInformationCheckboxStyled
                type="squared"
                isChecked={true}
                textColor="white"
                key={crypto.randomUUID()}>
                {text}
              </OrderCardInformationCheckboxStyled>
            ))}
            {productsUnchecked.map((text) => (
              <OrderCardInformationCheckboxStyled
                type="squared"
                isChecked={false}
                disabled={true}
                key={crypto.randomUUID()}>
                {text}
              </OrderCardInformationCheckboxStyled>
            ))}
          </OrderCardInformationListStyled>
        </OrderCardRecipientContainerStyled>
      </OrderCard>
      <RadioGroup
        title="Способ оплаты"
        isTitleUppercase={true}
        onChange={null}
        array={paymentMethodRadioGroup}
        selectedValue=""
      />
      <OrderButtonGroup prevStep={prevStep} nextStep={nextStep} nextStepText="Перейти к оплате" />
    </OrderPlacementStyled>
  );
};

OrderCardRecipientHeader.propTypes = {
  userName: PropTypes.string.isRequired,
  userSex: PropTypes.string.isRequired
};

OrderPlacement.propTypes = {
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired
};
