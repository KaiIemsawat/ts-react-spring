import { Link } from "react-router-dom";

const ExploreTopBooks = () => {
    return (
        <div className="p-5 mb-4 bg-dark header">
            <div className="container-fluid py-5 text-white d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="display-5 fw-bold">Find your next books</h1>
                    <p className="col-md-10 fs-4">
                        What wold you like to read next?
                    </p>
                    <Link
                        className="btn main-color btn-lg text-white"
                        to="/search"
                        type="button"
                    >
                        Explore top books
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default ExploreTopBooks;
