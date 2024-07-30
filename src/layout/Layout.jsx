import { Route, Routes } from "react-router-dom";

import { Horoscopes } from "../pages";

export const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Horoscopes />} />
    </Routes>
  );
};
