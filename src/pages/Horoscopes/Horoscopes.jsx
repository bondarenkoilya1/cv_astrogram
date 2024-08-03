import React from "react";
import PropTypes from "prop-types";

import { ContainerStyled } from "../../styled";
import { HoroscopesContainerStyled } from "./styled";

const Main = ({ nextStep }) => {
  return (
    <ContainerStyled>
      <button onClick={nextStep}>Next step</button>
      <Image
        src={woman}
        alt="Woman with a heart"
        width="100%"
        height="560px"
        style={{ marginBottom: "60px" }}
      />
      <HoroscopesContainerStyled>
        <MainForm />
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

import woman from "../../assets/images/woman.png";
import {
  BirthForm,
  GetAnswers,
  HoroscopeContent,
  Image,
  MainForm,
  Products
} from "../../components";
import { blogPostsList, horoscopeContentList, otherProductsList, productsList } from "../../data";

export const Horoscopes = ({ stage, nextStep, prevStep }) => {
  switch (stage) {
    case 1:
      return <Main nextStep={nextStep} />;
    case 2:
      return (
        <div style={{ maxWidth: "750px", margin: "0 auto" }}>
          <BirthForm />
          <button onClick={prevStep}>Prev</button>
          <button onClick={nextStep}>Next</button>
        </div>
      );
    case 3:
      return (
        <div>
          3<button onClick={prevStep}>Prev</button>
          <button onClick={nextStep}>Next</button>
        </div>
      );
    case 4:
      return (
        <div>
          4<button onClick={prevStep}>Prev</button>
          <button onClick={nextStep}>Next</button>
        </div>
      );
    case 5:
      return (
        <div>
          5<button onClick={prevStep}>Prev</button>
        </div>
      );
    default:
      return null;
  }
};

Horoscopes.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  stage: PropTypes.number.isRequired
};
