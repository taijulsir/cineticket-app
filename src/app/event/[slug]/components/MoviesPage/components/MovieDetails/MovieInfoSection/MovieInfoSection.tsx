import MovieDetailsTable from "./MovieDetailsTable/MovieDetailsTable";


function MovieInfoSection({ name, ratings, director, cast }) {
    return (
        
        <div className="col-span-1 md:col-span-2 text-[#FFFFFF] mt-[-70px] md:mt-0">
            <h3 className="pt-6 pb-7 md:pt-14 md:pb-4 font-medium">
                {name}
            </h3>
            <MovieDetailsTable ratings={ratings} director={director} cast={cast} />
        </div>
    );
};

export default MovieInfoSection;
