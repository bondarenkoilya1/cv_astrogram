import React from "react";
import { Controller, useForm } from "react-hook-form";
import PropTypes from "prop-types";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  OrderCardButtonStyled,
  OrderCardInformationCheckboxStyled,
  OrderCardInformationListStyled,
  OrderCardRecipientContainerStyled,
  OrderCardRecipientHeaderStyled,
  OrderCardRecipientHeaderTitleStyled,
  OrderCardRecipientListStyled,
  OrderPlacementContainerStyled,
  OrderPlacementPriceDescriptionStyled,
  OrderPlacementPriceStyled,
  OrderPlacementResultContainerStyled,
  OrderPlacementResultTitleStyled,
  OrderPlacementSeparator,
  OrderPlacementStyled,
  OrderPlacementTitleStyled,
  TextWithIconStyled
} from "./styled";

import { ReactComponent as CalendarIcon } from "../../assets/images/calendar.svg";
import { ReactComponent as ClockIcon } from "../../assets/images/clock.svg";
import { ReactComponent as MapIcon } from "../../assets/images/map.svg";
import { ReactComponent as UserIcon } from "../../assets/images/user.svg";
import { paymentMethodRadioGroup } from "../../data";
import { paymentMethodSchema } from "../../schemes";
import { formatDate } from "../../utils";
import { OrderButtonGroup, OrderCard, RadioGroup, TextWithIcon } from "../ui";

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

export const OrderPlacement = ({ prevStep, nextStep }) => {
  const { control, handleSubmit } = useForm({ resolver: zodResolver(paymentMethodSchema) });

  const onSubmit = (data) => {
    nextStep();
    return data;
  };

  const userData = JSON.parse(localStorage.getItem("data"));
  const userBirthInformation = JSON.parse(localStorage.getItem("birthInformation"));

  const userName = userData.name;
  const userSex = userData.sex;
  const userBirthday = formatDate(userBirthInformation.birthday);
  const userBirthtime = userBirthInformation.birthtime || "Время не известно";
  const userBirthAddress = userBirthInformation.birthAddress;
  // unused
  // const userBirthCoordinates = userBirthInformation.birthCoordinates;
  const productsMain = userData.productsMain;
  const productsAdditional = userData.productsAdditional;
  const allProducts = [...productsMain, ...productsAdditional];

  const recipientArray = [
    { icon: <CalendarIcon />, text: userBirthday },
    { icon: <ClockIcon />, text: userBirthtime },
    { icon: <MapIcon />, text: userBirthAddress }
  ];

  const { productsChecked, productsUnchecked } = allProducts.reduce(
    (acc, { title, isChecked }) => {
      isChecked ? acc.productsChecked.push(title) : acc.productsUnchecked.push(title);

      return acc;
    },
    { productsChecked: [], productsUnchecked: [] }
  );

  return (
    <OrderPlacementStyled onSubmit={handleSubmit((data) => console.log(data))}>
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
          <OrderCardButtonStyled>Редактировать</OrderCardButtonStyled>
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
      <Controller
        name="paymentMethod"
        control={control}
        render={({ field: { onChange, value = "" } }) => (
          <RadioGroup
            array={paymentMethodRadioGroup}
            selectedValue={value}
            onChange={onChange}
            title="Способ оплаты"
            isTitleUppercase={true}
          />
        )}
      />
      <OrderPlacementSeparator />
      <OrderPlacementContainerStyled>
        <OrderPlacementResultTitleStyled>Итог</OrderPlacementResultTitleStyled>
        <OrderPlacementResultContainerStyled>
          <OrderPlacementPriceStyled>1 050 руб.</OrderPlacementPriceStyled>
          <OrderPlacementPriceDescriptionStyled>
            Сумма к оплате
          </OrderPlacementPriceDescriptionStyled>
        </OrderPlacementResultContainerStyled>
      </OrderPlacementContainerStyled>
      <OrderButtonGroup
        prevStep={prevStep}
        nextStep={handleSubmit(onSubmit)}
        nextStepText="Перейти к оплате"
      />
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
