import "./App.css";
import HomePage from "./layouts/Homepage/HomePage";
import Footer from "./layouts/NavbarAndFooter/Footer";
import Navbar from "./layouts/NavbarAndFooter/Navbar";
import SearchBookPage from "./layouts/searchBookPage/SearchBookPage";

function App() {
    return (
        <div>
            <Navbar />
            {/* <HomePage /> */}
            <SearchBookPage />
            <Footer />
        </div>
    );
}

export default App;
