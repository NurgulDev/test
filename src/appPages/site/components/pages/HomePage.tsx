import React from "react";
import Main from "./homeSections/main/Main";
import Cards from "./homeSections/cards/Cards";
import Why from "./homeSections/why/Why";
import SliderHome from "./homeSections/slider/SliderHome";

function HomePage() {
  return (
    <div>
      <Main />
      <Cards />
      <Why />
      <SliderHome />
    </div>
  );
}

export default HomePage;
