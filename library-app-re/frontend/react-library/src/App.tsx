import React from "react";
import "./App.css";
import { Navbar } from "./layouts/navbarAndFooter/Navbar";
import { ExploreTopBooks } from "./layouts/homepage/ExploreTopBooks";

function App() {
    return (
        <div>
            <Navbar />
            <ExploreTopBooks />
        </div>
    );
}

export default App;