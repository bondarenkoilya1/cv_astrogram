import { Route, Routes } from "react-router-dom";

import { Horoscopes } from "../pages";

export const Layout = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Horoscopes props={props} />} />
    </Routes>
  );
};
