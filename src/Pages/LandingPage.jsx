import React from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Main from "../Layout/Main";
import Section from "../Layout/Section";
import Register from "../Layout/Footer";
const LandingPage = () => {
  return (
    <div>
      <Header sx={{ paddingTop: "20px" }} />
      <Main />

      <Section />
    <Footer/>
     
    </div>
  );
};

export default LandingPage;
