import { BrowserRouter as Router } from "react-router-dom";

import { Global } from "@emotion/react";

import { GlobalStyle } from "./styled";

import { Header } from "./components";
import { Layout } from "./layout";

export const App = () => {
  return (
    <Router>
      <Global styles={GlobalStyle} />
      <Header />
      <Layout />
    </Router>
  );
};
