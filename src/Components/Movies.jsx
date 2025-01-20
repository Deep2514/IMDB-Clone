import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({handleaddtowatchlist, handleremovefromwatchlist, watchlist}) {

  const [movies, setMovies] = useState([])
  const [PageNo, setPageNo] = useState(1)

  const handlePrev = () =>{
    if(PageNo==1){
      setPageNo(PageNo)
    }
    else{
      setPageNo(PageNo-1)
    }
  }

  const handleNext = () =>{
    setPageNo(PageNo+1)
  }

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=dea4d40b873591ed4a1da8eb4ae717e9&language=en-US&page=${PageNo}`).then(function (res) {
        setMovies(res.data.results)
      });
  }, [PageNo]);
  return (
    <div className="p-5">
      <div className="text-2xl m-2 font-bold text-center">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movieobj)=>{
          return <MovieCard key={movieobj.id} movieObj={movieobj} poster_path={movieobj.poster_path} name={movieobj.original_title} handleaddtowatchlist={handleaddtowatchlist} handleremovefromwatchlist={handleremovefromwatchlist} watchlist={watchlist}/>
        })}
      </div>

      <Pagination PageNo={PageNo} handlePrev={handlePrev} handleNext={handleNext}/>
    </div>
  );
}

export default Movies;
