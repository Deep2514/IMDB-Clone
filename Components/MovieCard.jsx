import React from "react";
import Watchlist from "./Watchlist";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleaddtowatchlist,
  handleremovefromwatchlist,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }

    return false;
  }
  return (
    <div
      className="h-[50vh] w-[170px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:curser-pointer flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleremovefromwatchlist(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleaddtowatchlist(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
        >
          &#128525;
        </div>
      )}

      <div className="flex  text-white text-xl w-full p-2 text-center bg-gray-900/60 rounded-xl">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
