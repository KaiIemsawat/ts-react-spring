import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./layouts/Homepage/HomePage";
import Footer from "./layouts/NavbarAndFooter/Footer";
import Navbar from "./layouts/NavbarAndFooter/Navbar";
import SearchBookPage from "./layouts/searchBookPage/SearchBookPage";

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/home" />
                </Route>
                <Route path="/home">
                    <HomePage />
                </Route>
                <Route path="/search">
                    <SearchBookPage />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
