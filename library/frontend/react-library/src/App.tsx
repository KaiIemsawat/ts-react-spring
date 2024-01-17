import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import "./App.css";
import { oktaConfig } from "./lib/oktaConfig";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { LoginCallback, Security } from "@okta/okta-react";

import HomePage from "./layouts/Homepage/HomePage";
import Footer from "./layouts/NavbarAndFooter/Footer";
import Navbar from "./layouts/NavbarAndFooter/Navbar";
import SearchBookPage from "./layouts/searchBookPage/SearchBookPage";
import BookCheckoutPage from "./layouts/BookCheckoutPage/BookCheckoutPage";
import LoginWidget from "./Auth/LoginWidget";

const oktaAuth = new OktaAuth(oktaConfig);

function App() {
    const history = useHistory();
    const restoreOriginalUrl = async (_oktaAuth: any, originalUri: any) => {
        history.replace(
            toRelativeUrl(originalUri || "/", window.location.origin)
        );
    };

    const customAuthHandler = () => {
        history.push("/login");
    };
    return (
        <div className="d-flex flex-column min-vh-100">
            <Security
                oktaAuth={oktaAuth}
                restoreOriginalUri={restoreOriginalUrl}
                onAuthRequired={customAuthHandler}
            >
                <Navbar />
                <div className="flex-grow-1">
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
                        <Route path="/checkout/:bookId">
                            <BookCheckoutPage />
                        </Route>
                        <Route
                            path="/login"
                            render={() => <LoginWidget config={oktaConfig} />}
                        />
                        <Route
                            path="/login/callback"
                            component={LoginCallback}
                        />
                    </Switch>
                </div>
                <Footer />
            </Security>
        </div>
    );
}

export default App;
