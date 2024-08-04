import React from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  BirthFormBirthtimeContainerStyled,
  BirthFormContainerStyled,
  BirthFormDescriptionStyled,
  BirthFormInputsStyled,
  BirthFormStyled,
  BirthFormTextStyled,
  BirthFormTitleStyled
} from "./styled";

import calendar from "../../../../assets/images/calendar.svg";
import clock from "../../../../assets/images/clock.svg";
import { birthFormSchema } from "../../../../schemes";
import { RadioButton } from "../../RadioButton";
import { TextField } from "../../TextField";

export const BirthForm = ({ ...attrs }) => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(birthFormSchema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const birthMask = [/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/];
  const timeMask = [/\d/, /\d/, ":", /\d/, /\d/];

  return (
    <BirthFormStyled {...attrs} onSubmit={handleSubmit(onSubmit)}>
      <BirthFormTitleStyled>Информация о рождении</BirthFormTitleStyled>
      <BirthFormContainerStyled>
        <TextField
          masked={true}
          imageAttrs={{ src: calendar, alt: "Calendar icon", width: "20px", height: "20px" }}
          mask={birthMask}
          placeholder="00.00.0000"
          id="birthday"
          label="Дата рождения"
          name="birthday"
          style={{ width: "300px" }}
        />
        <BirthFormBirthtimeContainerStyled>
          <TextField
            masked={true}
            imageAttrs={{ src: clock, alt: "Clock icon", width: "20px", height: "20px" }}
            mask={timeMask}
            placeholder="00:00"
            id="birthtime"
            label="Время рождения"
            name="birthtime"
            style={{ width: "222px", marginRight: "10px" }}
          />
          <RadioButton onChange={null} name="birthtime-radio" checked={null} value="birthtme-radio">
            Я не знаю время
          </RadioButton>
        </BirthFormBirthtimeContainerStyled>
      </BirthFormContainerStyled>
      <BirthFormDescriptionStyled>
        <BirthFormTextStyled>
          Если вы не знаете время рождения — ничего страшного.
        </BirthFormTextStyled>
        <BirthFormTextStyled>
          Даты рождения достаточно для составления большей части гороскопа.
        </BirthFormTextStyled>
        <BirthFormTextStyled>
          Время уточняет лишь некоторые детали в персональном прогнозе
        </BirthFormTextStyled>
      </BirthFormDescriptionStyled>
      <BirthFormInputsStyled>
        <TextField
          id="birth-address"
          name="birth-address"
          label="Адрес рождения"
          placeholder="Введите адрес"
          {...register("birthAddress")}
        />
        <TextField
          id="birth-coordinates"
          name="birth-coordinates"
          label="Координаты рождения (для более точных данных, по желанию)"
          placeholder="Введите координаты"
          style={{ marginTop: "40px" }}
          {...register("birthCoordinates")}
        />
      </BirthFormInputsStyled>
      <button type="submit">SUBMIT</button>
    </BirthFormStyled>
  );
};

BirthForm.propTypes = {};
