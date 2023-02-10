import React from "react";
import '../styles/components/maincontent.sass'

import About from "./About";
import Project from "./Project";
import Tech from "./Tech";

const MainContent = () => {

    return(
        <main id="main-content">
            <About/>
            <Tech/>
            <Project/>
        </main>
    )
}

export default MainContent;