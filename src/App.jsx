import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Global } from "@emotion/react";

import { GlobalStyle } from "./styled";

import { Footer, Header } from "./components";
import { Layout } from "./layout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const App = () => {
  const [stage, setStage] = useState(1);

  const resetForm = () => {
    setStage(1);
    localStorage.removeItem("pageStage");
  };

  useEffect(() => {
    const savedStage = JSON.parse(localStorage.getItem("pageStage"));
    if (savedStage) {
      setStage(savedStage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pageStage", JSON.stringify(stage));
  }, [stage]);

  const nextStep = () => setStage((prevStage) => prevStage + 1);
  const prevStep = () => setStage((prevStage) => prevStage - 1);

  return (
    <Router>
      <Global styles={GlobalStyle} />
      <Header resetForm={resetForm} />
      <main>
        <Layout stage={stage} nextStep={nextStep} prevStep={prevStep} />
      </main>
      <Footer stage={stage} />
    </Router>
  );
};
