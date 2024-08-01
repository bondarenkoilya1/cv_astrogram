import { useState } from "react";

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

import { Button } from "../../Button";
import { Checkbox } from "../../Checkbox";
import { RadioGroup } from "../../RadioGroup";
import { TextField } from "../../TextField";

export const BasicForm = () => {
  const [selectedRadio, setSelectedRadio] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const radioGroupArray = [
    { name: "sex", text: "Мужской", value: "male" },
    { name: "sex", text: "Женский", value: "female" }
  ];

  return (
    <BasicFormStyled style={{ marginTop: "30px", marginBottom: "130px" }}>
      <BasicFormTitleStyled>Оформление</BasicFormTitleStyled>
      <BasicFormContainerStyled style={{ marginTop: "20px" }}>
        <TextField
          id="user-name"
          label="Ваше имя"
          placeholder="Ваше имя"
          style={{ marginRight: "32px" }}
        />
        <RadioGroup
          array={radioGroupArray}
          setSelectedValue={setSelectedRadio}
          selectedValue={selectedRadio}
          title="Ваш пол"
        />
      </BasicFormContainerStyled>
      <TextField
        id="user-email"
        label="Почта"
        placeholder="Ваша почта"
        type="email"
        style={{ marginTop: "30px" }}
      />
      <Checkbox
        setIsChecked={setIsCheckboxChecked}
        type="squared"
        isChecked={isCheckboxChecked}
        style={{ marginTop: "30px" }}>
        Согласие с&nbsp;
        <BasicFormLinkStyled to="/policy" target="_blank">
          политикой конфиденциальности
        </BasicFormLinkStyled>
      </Checkbox>
      <BasicFormFooterStyled style={{ marginTop: "30px" }}>
        <BasicFormPriceInformationStyled>
          <BasicFormPriceStyled>1 050 руб.</BasicFormPriceStyled>
          <BasicFormPriceSubtitleStyled>Сумма заказа</BasicFormPriceSubtitleStyled>
        </BasicFormPriceInformationStyled>
        <Button type="button">Перейти к оформлению</Button>
      </BasicFormFooterStyled>
    </BasicFormStyled>
  );
};
