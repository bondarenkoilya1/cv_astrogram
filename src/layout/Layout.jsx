import { Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";

import { Horoscopes } from "../pages";

export const Layout = ({ stage, prevStep, nextStep }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Horoscopes stage={stage} prevStep={prevStep} nextStep={nextStep} />}
      />
    </Routes>
  );
};

Layout.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
  stage: PropTypes.number.isRequired
};
