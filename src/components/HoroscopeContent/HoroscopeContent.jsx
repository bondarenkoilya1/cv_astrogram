import React from "react";
import PropTypes from "prop-types";

import {
  HoroscopeContentListStyled,
  HoroscopeContentStyled,
  HoroscopeContentTitleStyled
} from "./styled";

import { ContentCard } from "../ui";

export const HoroscopeContent = ({ array, ...attrs }) => {
  return (
    <HoroscopeContentStyled {...attrs}>
      <HoroscopeContentTitleStyled>А еще в гороскопе вас ждет</HoroscopeContentTitleStyled>
      <HoroscopeContentListStyled>
        {array.map(({ title, description, backgroundName }) => (
          <ContentCard
            title={title}
            description={description}
            backgroundName={backgroundName}
            key={crypto.randomUUID()}
          />
        ))}
      </HoroscopeContentListStyled>
    </HoroscopeContentStyled>
  );
};

HoroscopeContent.propTypes = {
  array: PropTypes.array.isRequired
};
