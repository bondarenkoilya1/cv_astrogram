import React from "react";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

import {
  BasicFormBlockWithMarginTop,
  BasicFormButtonStyled,
  BasicFormCheckboxStyled,
  BasicFormContainerStyled,
  BasicFormFooterStyled,
  BasicFormLinkStyled,
  BasicFormPriceInformationStyled,
  BasicFormPriceStyled,
  BasicFormPriceSubtitleStyled,
  BasicFormStyled,
  BasicFormTextFieldWithMarginRight,
  BasicFormTitleStyled
} from "./styled";

import { sexRadioGroup } from "../../../../data";
import { RadioGroup } from "../../RadioGroup";
import { TextField } from "../../TextField";

export const BasicForm = ({ register, isSubmitting = false, control = {}, ...attrs }) => {
  return (
    <BasicFormStyled {...attrs}>
      <BasicFormTitleStyled>Оформление</BasicFormTitleStyled>
      <BasicFormContainerStyled>
        <BasicFormTextFieldWithMarginRight
          id="user-name"
          label="Ваше имя"
          placeholder="Ваше имя"
          {...register("name")}
          name="name"
        />
        <Controller
          name="sex"
          control={control}
          render={({ field: { onChange, value = "" } }) => (
            <RadioGroup
              array={sexRadioGroup}
              selectedValue={value}
              onChange={onChange}
              title="Ваш пол"
            />
          )}
        />
      </BasicFormContainerStyled>
      <BasicFormBlockWithMarginTop>
        <TextField
          id="user-email"
          label="Почта"
          placeholder="Ваша почта"
          type="email"
          name="email"
          {...register("email")}
        />
      </BasicFormBlockWithMarginTop>
      <BasicFormBlockWithMarginTop>
        <Controller
          name="policy"
          control={control}
          render={({ field: { onChange, value } }) => (
            <BasicFormCheckboxStyled
              isChecked={value}
              onChange={() => onChange(!value)}
              type="squared">
              Согласие с&nbsp;
              <BasicFormLinkStyled to="/policy" target="_blank">
                политикой конфиденциальности
              </BasicFormLinkStyled>
            </BasicFormCheckboxStyled>
          )}
        />
      </BasicFormBlockWithMarginTop>
      <BasicFormFooterStyled>
        <BasicFormPriceInformationStyled>
          <BasicFormPriceStyled>1 050 руб.</BasicFormPriceStyled>
          <BasicFormPriceSubtitleStyled>Сумма заказа</BasicFormPriceSubtitleStyled>
        </BasicFormPriceInformationStyled>
        <BasicFormButtonStyled type="submit" disabled={isSubmitting} appearance="filled">
          Перейти к оформлению
        </BasicFormButtonStyled>
      </BasicFormFooterStyled>
    </BasicFormStyled>
  );
};

BasicForm.propTypes = {
  register: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
  control: PropTypes.object
};
