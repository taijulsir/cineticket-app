

function MovieDetailsWrapper({ children }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {children}
        </div>
    );
};

export default MovieDetailsWrapper;
