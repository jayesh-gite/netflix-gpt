import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlyaingMovies && (
      <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-50"></div>
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
