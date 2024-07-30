import { BrowserRouter as Router } from "react-router-dom";

import { Global } from "@emotion/react";

import { GlobalStyle } from "./styled";

import { Layout } from "./layout/Layout.jsx";

export const App = () => {
  return (
    <Router>
      <Global styles={GlobalStyle} />
      <Layout />
    </Router>
  );
};
