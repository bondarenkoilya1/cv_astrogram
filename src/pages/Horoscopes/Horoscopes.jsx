import React from "react";

import { ContainerStyled } from "../../styled";
import { HoroscopesContainerStyled } from "./styled";

import woman from "../../assets/images/woman.png";
import { GetAnswers, HoroscopeContent, Image, MainForm, Products } from "../../components";
import { blogPostsList, horoscopeContentList, otherProductsList, productsList } from "../../data";

export const Horoscopes = () => {
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
