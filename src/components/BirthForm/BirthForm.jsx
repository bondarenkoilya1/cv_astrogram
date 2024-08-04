import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

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

import calendar from "../../assets/images/calendar.svg";
import clock from "../../assets/images/clock.svg";
import { birthFormSchema } from "../../schemes";
import { OrderButtonGroup, RadioButton, TextField } from "../ui";

export const BirthForm = ({ prevStep, nextStep, ...attrs }) => {
  const { register, handleSubmit, setValue, watch } = useForm({
    resolver: zodResolver(birthFormSchema),
    defaultValues: {
      birthtime: "",
      birthtimeRadio: false
    }
  });

  const birthtime = watch("birthtime");
  const birthtimeRadio = watch("birthtimeRadio");

  useEffect(() => {
    if (birthtime) {
      setValue("birthtimeRadio", false);
    }
  }, [birthtime, setValue]);

  useEffect(() => {
    if (birthtimeRadio) {
      setValue("birthtime", "");
    }
  }, [birthtimeRadio, setValue]);

  const onSubmit = (data) => {
    localStorage.setItem("birthInformation", JSON.stringify(data));

    nextStep();
  };

  const birthMask = [/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/];
  const timeMask = [/\d/, /\d/, ":", /\d/, /\d/];

  return (
    <BirthFormStyled {...attrs} onSubmit={handleSubmit((data) => console.log(data))}>
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
          {...register("birthday")}
          onChange={(e) => setValue("birthday", e.target.value)}
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
            {...register("birthtime")}
            onChange={(e) => setValue("birthtime", e.target.value)}
          />
          <RadioButton
            onChange={() => setValue("birthtimeRadio", !birthtimeRadio)}
            name="birthtime-radio"
            checked={birthtimeRadio}
            value="birthtme-radio">
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
      <OrderButtonGroup prevStep={prevStep} nextStep={handleSubmit(onSubmit)} />
    </BirthFormStyled>
  );
};

BirthForm.propTypes = {
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired
};
