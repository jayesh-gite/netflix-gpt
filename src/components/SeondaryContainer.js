import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlyaingMovies && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20"></div>
        <MovieList title={"Now Playing"} movies={movies.nowPlyaingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />{" "}
        <MovieList title={"Trending"} movies={movies.nowPlyaingMovies} />{" "}
        <MovieList title={"Upcoming"} movies={movies.nowPlyaingMovies} />{" "}
        <MovieList title={"Horror"} movies={movies.nowPlyaingMovies} />{" "}
        <MovieList title={"TV Shows"} movies={movies.nowPlyaingMovies} />
      </div>
    )
  );
};
export default SecondaryContainer;
