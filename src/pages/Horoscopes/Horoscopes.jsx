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

const Result = ({ prevStep, nextStep }) => {
  const someData = JSON.parse(localStorage.getItem("data"));
  console.log(someData.productsMain[0].title);

  const productsMain = someData.productsMain;
  const productsAdditional = someData.productsAdditional;

  const productsMainTitles = productsMain.filter(({ title, isChecked }) => {
    return { title, isChecked };
  });
  const productsAdditionalTitles = productsAdditional.map(({ title, isChecked }) => {
    return { title, isChecked };
  });

  const productsAllTitle = productsMainTitles.concat(productsAdditionalTitles);
  console.log(productsAllTitle);

  const productsAllChecked = productsAllTitle
    .filter(({ isChecked }) => isChecked)
    .map(({ title }) => title);

  const productsAllUnchecked = productsAllTitle
    .filter(({ isChecked }) => !isChecked)
    .map(({ title }) => title);

  console.log(productsAllChecked, productsAllUnchecked);

  return (
    <HoroscopesContainerStyled>
      <p>4</p>
      <button onClick={prevStep}>Prev</button>
      <button onClick={nextStep}>Next</button>
    </HoroscopesContainerStyled>
  );
};

Main.propTypes = {
  nextStep: PropTypes.func.isRequired
};

Result.propTypes = {
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired
};

import woman from "../../assets/images/woman.png";
import {
  BirthForm,
  GetAnswers,
  Gratitude,
  HoroscopeContent,
  Image,
  MainForm,
  Products
} from "../../components";
import { blogPostsList, horoscopeContentList, otherProductsList, productsList } from "../../data";

export const Horoscopes = ({ stage, nextStep, prevStep, resetForm }) => {
  switch (stage) {
    case 1:
      return <Main nextStep={nextStep} />;
    case 2:
      return (
        <HoroscopesContainerStyled>
          <BirthForm />
          <button onClick={prevStep}>Prev</button>
          <button onClick={nextStep}>Next</button>
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
      return <Result prevStep={prevStep} nextStep={nextStep} />;
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
