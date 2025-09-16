import def from "ajv/dist/vocabularies/discriminator";
import Header from "./Header.js";
import { API_OPTIONS } from "../utils/constants.js";
import { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlyaingMovies.js";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SeondaryContainer.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import { useSelector } from "react-redux";
import GPTSearch from "./GptSearch.js";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
