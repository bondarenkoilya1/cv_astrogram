import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import PropTypes from "prop-types";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  BirthFormBirthtimeContainerStyled,
  BirthFormBirthtimeTextFieldStyled,
  BirthFormContainerStyled,
  BirthFormDescriptionStyled,
  BirthFormInputsStyled,
  BirthFormRadioButtonStyled,
  BirthFormStyled,
  BirthFormTextFieldStyled,
  BirthFormTextStyled,
  BirthFormTitleStyled
} from "./styled";

import calendar from "../../assets/images/calendar.svg";
import clock from "../../assets/images/clock.svg";
import { birthFormSchema } from "../../schemes";
import { OrderButtonGroup, TextField } from "../ui";

export const BirthForm = ({ prevStep, nextStep, ...attrs }) => {
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(birthFormSchema),
    defaultValues: {
      birthtime: "",
      birthtimeRadio: false,
      birthday: "",
      birthAddress: "",
      birthCoordinates: ""
    }
  });

  const birthtime = watch("birthtime");
  const birthtimeRadio = watch("birthtimeRadio");

  useEffect(() => {
    if (birthtime) {
      setValue("birthtimeRadio", false);
    }
  }, [birthtime, setValue]);

  const onSubmit = (data) => {
    localStorage.setItem("birthInformation", JSON.stringify(data));
    nextStep();
  };

  const birthMask = [/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/];
  const timeMask = [/\d/, /\d/, ":", /\d/, /\d/];

  return (
    <BirthFormStyled {...attrs} onSubmit={handleSubmit(onSubmit)}>
      <BirthFormTitleStyled>Информация о рождении</BirthFormTitleStyled>
      <BirthFormContainerStyled>
        <BirthFormTextFieldStyled
          masked={true}
          imageAttrs={{ src: calendar, alt: "Calendar icon", width: "20px", height: "20px" }}
          mask={birthMask}
          placeholder="00.00.0000"
          id="birthday"
          label="Дата рождения"
          name="birthday"
          {...register("birthday")}
          onChange={(e) => setValue("birthday", e.target.value)}
          error={!!errors.birthday}
        />
        <BirthFormBirthtimeContainerStyled>
          <Controller
            name="birthtime"
            control={control}
            render={({ field }) => (
              <BirthFormBirthtimeTextFieldStyled
                masked={true}
                imageAttrs={{ src: clock, alt: "Clock icon", width: "20px", height: "20px" }}
                mask={timeMask}
                placeholder="00:00"
                id="birthtime"
                label="Время рождения"
                {...field}
                onChange={(e) => field.onChange(e)}
                error={!!errors.birthtime}
              />
            )}
          />
          <BirthFormRadioButtonStyled
            onChange={() => {
              const newValue = !birthtimeRadio;
              setValue("birthtimeRadio", newValue);
              if (newValue) {
                setValue("birthtime", "");
              }
            }}
            name="birthtime-radio"
            checked={birthtimeRadio}
            value="birthtime-radio"
            error={!!errors.birthtime}>
            Я не знаю время
          </BirthFormRadioButtonStyled>
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
          error={!!errors.birthAddress}
        />
        <TextField
          id="birth-coordinates"
          name="birth-coordinates"
          label="Координаты рождения (для более точных данных, по желанию)"
          placeholder="Введите координаты"
          style={{ marginTop: "40px" }}
          {...register("birthCoordinates")}
          error={!!errors.birthCoordinates}
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
