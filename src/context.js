import React, { createContext, useContext, useEffect, useState } from 'react';

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}`;

const AppContext = createContext();

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [query, setQuery] = useState("Avengers");

  const [publicPlaylist, setPublicPlaylist] = useState([]);
  const [privatePlaylist, setPrivatePlaylist] = useState([]);

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
      setIsError({
        show: true,
        msg: "Something went wrong.",
      });
    }
  };

  useEffect(() => {
    let time = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 800);

    return () => clearTimeout(time);
  }, [query]);

  const addToPublicPlaylist = (movie) => {
    setPublicPlaylist((prevPlaylist) => {
      if (prevPlaylist.some(m => m.imdbID === movie.imdbID)) {
        return prevPlaylist;
      }
      return [...prevPlaylist, movie];
    });
  };

  const addToPrivatePlaylist = (movie) => {
    setPrivatePlaylist((prevPlaylist) => {
      if (prevPlaylist.some(m => m.imdbID === movie.imdbID)) {
        return prevPlaylist;
      }
      return [...prevPlaylist, movie];
    });
  };

  const removeFromPrivatePlaylist = (movieTitle) => {
    setPrivatePlaylist((prevPlaylist) => prevPlaylist.filter(movie => movie.Title !== movieTitle));
  };

  const removeFromPublicPlaylist = (movieTitle) => {
    setPublicPlaylist((prevPlaylist) => prevPlaylist.filter(movie => movie.Title !== movieTitle));
  };
  

  return (
    <AppContext.Provider value={{
      isLoading,
      isError,
      movie,
      query,
      setQuery,
      publicPlaylist,
      privatePlaylist,
      addToPublicPlaylist,
      addToPrivatePlaylist,
      removeFromPrivatePlaylist,
      removeFromPublicPlaylist
    }}>
      {children}
    </AppContext.Provider>
  );
};
