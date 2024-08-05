import React from "react";
import { Controller, useForm } from "react-hook-form";
import PropTypes from "prop-types";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  MainFormDescriptionStyled,
  MainFormHoroscopeCompositionStyled,
  MainFormStyled,
  MainFormTitleStyled
} from "./styled";

import { horoscopeCompositionAdditionalList, horoscopeCompositionMainList } from "../../data";
import { mainFormSchema } from "../../schemes";
import { AddDiscount, BasicForm } from "../ui";

export const MainForm = ({ nextStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control
  } = useForm({
    resolver: zodResolver(mainFormSchema),
    defaultValues: {
      productsMain: horoscopeCompositionMainList.map((product) => ({
        ...product,
        isChecked: true
      })),
      productsAdditional: horoscopeCompositionAdditionalList.map((product) => ({
        ...product,
        isChecked: false
      })),
      addDiscount: false
    }
  });

  const onSubmit = async (data) => {
    nextStep();
    localStorage.setItem("data", JSON.stringify(data));
  };

  return (
    <MainFormStyled onSubmit={handleSubmit(onSubmit)}>
      <MainFormTitleStyled>Любовный гороскоп для одиноких</MainFormTitleStyled>
      <MainFormDescriptionStyled>
        Пора менять свою жизнь к лучшему — закажите свой персональный гороскоп и откройте для себя
        мир новых возможностей в любви!
      </MainFormDescriptionStyled>
      <Controller
        name="productsMain"
        control={control}
        render={({ field: { value } }) => (
          <MainFormHoroscopeCompositionStyled array={value} title="Состав гороскопа" />
        )}
      />
      <Controller
        name="productsAdditional"
        control={control}
        render={({ field: { value, onChange } }) => (
          <MainFormHoroscopeCompositionStyled
            array={value}
            title="Дополнительно"
            onCheckboxChange={onChange}
            style={{ marginTop: "60px" }}
          />
        )}
      />
      <AddDiscount
        discount={25}
        currentPrice={563}
        oldPrice={750}
        style={{ marginTop: "40px" }}
        control={control}
      />
      <BasicForm
        style={{ marginTop: "80px" }}
        register={register}
        isSubmitting={isSubmitting}
        control={control}
      />
      {Object.keys(errors).length > 0 && (
        <h2>Пожалуйста проверьте правильность заполнения всех полей</h2>
      )}
    </MainFormStyled>
  );
};

MainForm.propTypes = {
  nextStep: PropTypes.func.isRequired
};
