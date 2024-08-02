import { BrowserRouter as Router } from "react-router-dom";

import { Global } from "@emotion/react";

import { GlobalStyle } from "./styled";

import { Footer, Header } from "./components";
import { Layout } from "./layout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const App = () => {
  return (
    <Router>
      <Global styles={GlobalStyle} />
      <Header />
      <main>
        <Layout />
      </main>
      <Footer />
    </Router>
  );
};
