import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed inset-0 -z-10 w-screen h-screen">
        <img className="w-full h-full object-cover" src={BG_URL} alt="Logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};
export default GPTSearch;
