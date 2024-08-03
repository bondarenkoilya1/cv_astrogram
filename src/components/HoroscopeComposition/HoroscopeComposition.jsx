import PropTypes from "prop-types";

import {
  HoroscopeCompositionListStyled,
  HoroscopeCompositionStyled,
  HoroscopeCompositionTitleStyled
} from "./styled";

import { ProductCard } from "../ui";

export const HoroscopeComposition = ({ array, title, onCheckboxChange = () => {}, ...attrs }) => {
  const handleCheckboxChange = (index) => (newCheckedState) => {
    const updatedArray = array.map((item, i) =>
      i === index ? { ...item, isChecked: newCheckedState } : item
    );
    onCheckboxChange(updatedArray);
  };

  return (
    <HoroscopeCompositionStyled {...attrs}>
      <HoroscopeCompositionTitleStyled>{title}</HoroscopeCompositionTitleStyled>
      <HoroscopeCompositionListStyled>
        {array.map((product, index) => (
          <ProductCard
            key={crypto.randomUUID()}
            type={product.type}
            subtitle={product.subtitle}
            title={product.title}
            isChecked={product.isChecked}
            onChange={handleCheckboxChange(index)}
          />
        ))}
      </HoroscopeCompositionListStyled>
    </HoroscopeCompositionStyled>
  );
};

HoroscopeComposition.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["main", "additional", "gift"]).isRequired,
      subtitle: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      isChecked: PropTypes.bool.isRequired
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  onCheckboxChange: PropTypes.func
};
