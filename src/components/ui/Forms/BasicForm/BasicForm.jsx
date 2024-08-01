import React from "react";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

import {
  BasicFormContainerStyled,
  BasicFormFooterStyled,
  BasicFormLinkStyled,
  BasicFormPriceInformationStyled,
  BasicFormPriceStyled,
  BasicFormPriceSubtitleStyled,
  BasicFormStyled,
  BasicFormTitleStyled
} from "./styled.js";

import { mainFormRadioGroup } from "../../../../data";
import { Button } from "../../Button";
import { Checkbox } from "../../Checkbox";
import { RadioGroup } from "../../RadioGroup";
import { TextField } from "../../TextField";

export const BasicForm = ({ register, isSubmitting = false, control = {}, ...attrs }) => {
  return (
    <BasicFormStyled {...attrs}>
      <BasicFormTitleStyled>Оформление</BasicFormTitleStyled>
      <BasicFormContainerStyled style={{ marginTop: "20px" }}>
        <TextField
          id="user-name"
          label="Ваше имя"
          placeholder="Ваше имя"
          style={{ marginRight: "32px" }}
          {...register("name")}
          name="name"
        />
        <Controller
          name="sex"
          control={control}
          render={({ field: { onChange, value = "" } }) => (
            <RadioGroup
              array={mainFormRadioGroup}
              selectedValue={value}
              onChange={onChange}
              title="Ваш пол"
            />
          )}
        />
      </BasicFormContainerStyled>
      <TextField
        id="user-email"
        label="Почта"
        placeholder="Ваша почта"
        type="email"
        style={{ marginTop: "30px" }}
        name="email"
        {...register("email")}
      />
      <Controller
        name="policy"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Checkbox
            isChecked={value}
            onChange={() => onChange(!value)}
            type="squared"
            style={{ marginTop: "30px" }}>
            Согласие с&nbsp;
            <BasicFormLinkStyled to="/policy" target="_blank">
              политикой конфиденциальности
            </BasicFormLinkStyled>
          </Checkbox>
        )}
      />
      <BasicFormFooterStyled style={{ marginTop: "30px" }}>
        <BasicFormPriceInformationStyled>
          <BasicFormPriceStyled>1 050 руб.</BasicFormPriceStyled>
          <BasicFormPriceSubtitleStyled>Сумма заказа</BasicFormPriceSubtitleStyled>
        </BasicFormPriceInformationStyled>
        <Button type="submit" disabled={isSubmitting}>
          Перейти к оформлению
        </Button>
      </BasicFormFooterStyled>
    </BasicFormStyled>
  );
};

BasicForm.propTypes = {
  register: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  control: PropTypes.object
};
