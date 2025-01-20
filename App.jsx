import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Movies from "./Components/Movies";
import Banner from "./Components/Banner";
import Watchlist from "./Components/Watchlist";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let [watchlist, setWatchList] = useState([]);

  let handleaddtowatchlist = (movieObj) => {
    let newwatchlist = [...watchlist, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newwatchlist));
    setWatchList(newwatchlist);
    console.log(newwatchlist);
  };

  let handleremovefromwatchlist = (movieObj) => {
    let filteredwatchlist = watchlist.filter((movie) => {
      return movie.id !== movieObj.id;
    });

    setWatchList(filteredwatchlist);
    localStorage.setItem("moviesApp", JSON.stringify(filteredwatchlist));
    console.log(filteredwatchlist);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesApp");
    if (moviesFromLocalStorage) {
      setWatchList(JSON.parse(moviesFromLocalStorage));
    }
  }, []);

  // const deleteMovie = (movieTitle) => {
  //   const updatedWatchlist = watchlist.filter(movie => movie.title !== movieTitle);
  //   setWatchlist(updatedWatchlist);
  // };

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Banner />{" "}
                <Movies
                  watchlist={watchlist}
                  handleaddtowatchlist={handleaddtowatchlist}
                  handleremovefromwatchlist={handleremovefromwatchlist}
                />
              </>
            }
          />
          <Route
            path="/Watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                setWatchList={setWatchList}
                handleremovefromwatchlist={handleremovefromwatchlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
