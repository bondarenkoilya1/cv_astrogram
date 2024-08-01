import React from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { MainFormDescriptionStyled, MainFormStyled, MainFormTitleStyled } from "./styled";

import { horoscopeCompositionAdditionalList, horoscopeCompositionMainList } from "../../data";
import { mainFormSchema } from "../../schemes";
import { HoroscopeComposition } from "../HoroscopeComposition";
import { AddDiscount, BasicForm } from "../ui";

export const MainForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control
  } = useForm({
    resolver: zodResolver(mainFormSchema)
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <MainFormStyled onSubmit={handleSubmit(onSubmit)}>
      <MainFormTitleStyled>Любовный гороскоп для одиноких</MainFormTitleStyled>
      <MainFormDescriptionStyled>
        Пора менять свою жизнь к лучшему — закажите свой персональный гороскоп и откройте для себя
        мир новых возможностей в любви!
      </MainFormDescriptionStyled>
      <HoroscopeComposition
        array={horoscopeCompositionMainList}
        title="Состав гороскопа"
        style={{ marginTop: "60px" }}
      />
      <HoroscopeComposition
        array={horoscopeCompositionAdditionalList}
        title="Дополнительно"
        style={{ marginTop: "60px" }}
      />
      <AddDiscount discount={25} currentPrice={563} oldPrice={750} style={{ marginTop: "40px" }} />
      <BasicForm
        style={{ marginTop: "80px", marginBottom: "80px" }}
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
