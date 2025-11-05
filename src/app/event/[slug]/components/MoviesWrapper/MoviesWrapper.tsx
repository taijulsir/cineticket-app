function MoviesWrapper({ children }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-16 w-10/12 mx-auto pt-6 md:pt-0 pb-0 md:pb-40">
            {children}
        </div>
    )
}

export default MoviesWrapper