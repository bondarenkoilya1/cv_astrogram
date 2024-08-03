import PropTypes from "prop-types";

import { ProgressBarStyled, ProgressStyled } from "./styled";

export const ProgressBar = ({ stage }) => {
  const getWidth = () => {
    switch (stage) {
      case 2:
        return "33%";
      case 3:
        return "66%";
      case 4:
        return "100%";
      default:
        return "0%";
    }
  };

  return (
    <ProgressBarStyled>
      <ProgressStyled width={getWidth()} />
    </ProgressBarStyled>
  );
};

ProgressBar.propTypes = {
  stage: PropTypes.number.isRequired
};
