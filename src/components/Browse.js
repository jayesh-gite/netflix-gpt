import def from "ajv/dist/vocabularies/discriminator";
import Header from "./Header.js";
import { API_OPTIONS } from "../utils/constants.js";
import { useEffect } from "react";
import useNowPlayingMovies from "../hooks/useNowPlyaingMovies.js";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SeondaryContainer.js";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
