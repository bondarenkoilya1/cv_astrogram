import React from "react";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

import { zodResolver } from "@hookform/resolvers/zod";

import { ContainerStyled } from "../../styled";
import { HoroscopesContainerStyled, MainImageStyled } from "./styled";

import woman from "../../assets/images/woman.png";
import {
  AddDiscount,
  BirthForm,
  GetAnswers,
  Gratitude,
  HoroscopeContent,
  MainForm,
  OrderPlacement,
  Products
} from "../../components";
import { blogPostsList, horoscopeContentList, otherProductsList, productsList } from "../../data";
import { mainFormSchema } from "../../schemes/index.js";

const Main = ({ nextStep }) => {
  return (
    <ContainerStyled>
      <MainImageStyled src={woman} alt="Woman with a heart" width="100%" height="auto" />
      <HoroscopesContainerStyled>
        <MainForm nextStep={nextStep} />
      </HoroscopesContainerStyled>
      <HoroscopeContent array={horoscopeContentList} style={{ marginTop: "120px" }} />
      <GetAnswers style={{ marginTop: "120px" }} />
      <Products
        title="Погрузитесь в атмосферу настоящей астрологии"
        description="Ароматное  мыло и соль для ванны помогут подготовится  к новым романтическим открытиям"
        array={productsList}
        style={{ marginTop: "120px" }}
      />
      <Products
        title="Другие гороскопы"
        description="У нас есть ответы и на другие составляющие твоей жизни"
        array={otherProductsList}
        style={{ marginTop: "120px" }}
      />
      <Products
        title="Блог"
        description="Читайте статьи о любовных гороскопах"
        array={blogPostsList}
        style={{ marginTop: "120px", marginBottom: "120px" }}
        type="blog"
      />
    </ContainerStyled>
  );
};

Main.propTypes = {
  nextStep: PropTypes.func.isRequired
};

export const Horoscopes = ({ stage, nextStep, prevStep, resetForm }) => {
  const savedData = JSON.parse(localStorage.getItem("data"));

  const { control } = useForm({
    resolver: zodResolver(mainFormSchema),
    defaultValues: {
      addDiscount: savedData.addDiscount
    }
  });

  switch (stage) {
    case 1:
      return <Main nextStep={nextStep} />;
    case 2:
      return (
        <HoroscopesContainerStyled>
          <BirthForm prevStep={prevStep} nextStep={nextStep} />
        </HoroscopesContainerStyled>
      );
    case 3:
      return (
        <HoroscopesContainerStyled>
          3<button onClick={prevStep}>Prev</button>
          <button onClick={nextStep}>Next</button>`
          <AddDiscount
            discount={25}
            currentPrice={563}
            oldPrice={750}
            style={{ marginTop: "40px" }}
            control={control}
            checked={savedData.addDiscount}
          />
        </HoroscopesContainerStyled>
      );
    case 4:
      return <OrderPlacement prevStep={prevStep} nextStep={nextStep} />;
    case 5:
      return <Gratitude resetForm={resetForm} />;
    default:
      return null;
  }
};

Horoscopes.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  stage: PropTypes.number.isRequired,
  resetForm: PropTypes.func.isRequired
};
