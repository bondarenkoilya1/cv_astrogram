import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

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
            key={uuidv4()}
          />
        ))}
      </HoroscopeContentListStyled>
    </HoroscopeContentStyled>
  );
};

HoroscopeContent.propTypes = {
  array: PropTypes.array.isRequired
};
