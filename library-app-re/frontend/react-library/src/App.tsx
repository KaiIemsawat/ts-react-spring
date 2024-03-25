import React from "react";
import "./App.css";
import { Navbar } from "./layouts/navbarAndFooter/Navbar";
import { ExploreTopBooks } from "./layouts/homepage/ExploreTopBooks";
import { Carousel } from "./layouts/homepage/Carousel";
import { Hero } from "./layouts/homepage/Hero";
import { LibraryServices } from "./layouts/homepage/LibraryServices";

function App() {
    return (
        <div>
            <Navbar />
            <ExploreTopBooks />
            <Carousel />
            <Hero />
            <LibraryServices />
        </div>
    );
}

export default App;
