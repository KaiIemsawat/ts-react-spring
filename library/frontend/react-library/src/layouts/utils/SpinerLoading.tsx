const SpinerLoading = () => {
    return (
        <div
            className="container m-5 d-flex justify-content-center"
            style={{ height: 550 }}
        >
            <div className="spinner-border text-primary" role="statue">
                <span className="visually-hidden">Loadig...</span>
            </div>
        </div>
    );
};
export default SpinerLoading;
