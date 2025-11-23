import React from "react";
import Main from "./homeSections/main/Main";
import Cards from "./homeSections/cards/Cards";
import Why from "./homeSections/why/Why";
import HomeCourses from "./homeSections/homeCourses/HomeCourses";

function HomePage() {
    return (
        <div>
            <Main />
            <Cards />
            <Why />
            <HomeCourses />
        </div>
    );
}

export default HomePage;
