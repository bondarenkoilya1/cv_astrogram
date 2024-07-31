import PropTypes from "prop-types";

import {
  HoroscopeCompositionListStyled,
  HoroscopeCompositionStyled,
  HoroscopeCompositionTitleStyled
} from "./styled";

import { ProductCard } from "../ui";

export const HoroscopeComposition = ({ array, title, ...attrs }) => {
  return (
    <HoroscopeCompositionStyled {...attrs}>
      <HoroscopeCompositionTitleStyled>{title}</HoroscopeCompositionTitleStyled>
      <HoroscopeCompositionListStyled>
        {array &&
          array.map(({ type, subtitle, title }) => (
            <ProductCard key={crypto.randomUUID()} type={type} subtitle={subtitle} title={title} />
          ))}
      </HoroscopeCompositionListStyled>
    </HoroscopeCompositionStyled>
  );
};

HoroscopeComposition.propTypes = {
  array: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};
