import React from "react";
import PropTypes from "prop-types";

import { ContainerStyled } from "../../styled";
import { HoroscopesContainerStyled } from "./styled";

import woman from "../../assets/images/woman.png";
import {
  BirthForm,
  GetAnswers,
  Gratitude,
  HoroscopeContent,
  Image,
  MainForm,
  OrderPlacement,
  Products
} from "../../components";
import { blogPostsList, horoscopeContentList, otherProductsList, productsList } from "../../data";

const Main = ({ nextStep }) => {
  return (
    <ContainerStyled>
      <Image
        src={woman}
        alt="Woman with a heart"
        width="100%"
        height="560px"
        style={{ marginBottom: "60px" }}
      />
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
          <button onClick={nextStep}>Next</button>
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
