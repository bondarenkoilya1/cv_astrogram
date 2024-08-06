import PropTypes from "prop-types";

import { CustomArrowStyled } from "./styled";

import { ReactComponent as LeftArrowIcon } from "../../../../assets/images/slider/left-arrow.svg";
import { ReactComponent as RightArrowIcon } from "../../../../assets/images/slider/right-arrow.svg";

export const CustomArrow = ({ type, ...attrs }) => {
  if (type === "prev") {
    return (
      <CustomArrowStyled type={type} {...attrs}>
        <LeftArrowIcon />
      </CustomArrowStyled>
    );
  }

  return (
    <CustomArrowStyled type={type} {...attrs}>
      <RightArrowIcon />
    </CustomArrowStyled>
  );
};

CustomArrow.propTypes = {
  type: PropTypes.string.isRequired
};
