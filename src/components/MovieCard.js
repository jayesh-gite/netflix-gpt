// import { IMG_CDN_URL } from "../utils/constants";

// const MovieCard = ({ posterPath }) => {
//   return (
//     <div className="w-48 pr-4 ">
//       <img
//         alt="Movie Card"
//         src={IMG_CDN_URL + posterPath}
//         className="rounded-lg"
//       />
//     </div>
//   );
// };
// export default MovieCard;

import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4 relative group">
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        className="rounded-lg transform transition duration-300 ease-in-out group-hover:scale-110 group-hover:z-30 group-hover:shadow-2xl group-hover:brightness-110 z-10"
      />
    </div>
  );
};

export default MovieCard;
