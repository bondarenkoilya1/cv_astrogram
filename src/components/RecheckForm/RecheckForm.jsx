import React, { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PropTypes from "prop-types";

import { zodResolver } from "@hookform/resolvers/zod";

import { RecheckFormStyled } from "./styled";

import { horoscopeCompositionAdditionalList, horoscopeCompositionMainList } from "../../data/index";
import { recheckFormSchema } from "../../schemes/index.js";
import { HoroscopeComposition } from "../HoroscopeComposition/index.js";
import { AddDiscount, OrderButtonGroup } from "../ui/index.js";

export const RecheckForm = ({ prevStep, nextStep }) => {
  const [savedData, setSavedData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));

    setSavedData(data);
  }, []);

  const { control, reset, handleSubmit } = useForm({
    resolver: zodResolver(recheckFormSchema),
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

  useEffect(() => {
    if (savedData) {
      reset({
        productsMain: savedData.productsMain,
        productsAdditional: savedData.productsAdditional,
        addDiscount: savedData.addDiscount
      });
    }
  }, [savedData, reset]);

  const handleCheckboxChange = useCallback(
    (updatedProducts) => {
      const updatedSavedData = {
        ...savedData,
        productsAdditional: updatedProducts
      };

      setSavedData(updatedSavedData);
      localStorage.setItem("data", JSON.stringify(updatedSavedData));
    },
    [savedData]
  );

  const onSubmit = () => {
    localStorage.setItem("data", JSON.stringify(savedData));
    nextStep();
  };

  return (
    <RecheckFormStyled onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="productsMain"
        control={control}
        render={({ field: { value } }) => (
          <HoroscopeComposition array={value} title="Состав гороскопа" />
        )}
      />
      <Controller
        name="productsAdditional"
        control={control}
        render={({ field: { value, onChange } }) => {
          const handleChange = (updatedValue) => {
            onChange(updatedValue);
            handleCheckboxChange(updatedValue);
          };
          return (
            <HoroscopeComposition
              array={value}
              title="Дополнительно"
              onCheckboxChange={handleChange}
              style={{ marginTop: "60px" }}
            />
          );
        }}
      />
      <AddDiscount
        discount={25}
        currentPrice={563}
        oldPrice={750}
        style={{ marginTop: "40px" }}
        control={control}
        checked={savedData ? savedData.addDiscount : false}
      />
      <OrderButtonGroup prevStep={prevStep} nextStep={handleSubmit(onSubmit)} />
    </RecheckFormStyled>
  );
};

RecheckForm.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired
};
