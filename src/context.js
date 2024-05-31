import React, { useContext, useEffect, useState } from "react";

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_KEY}`;

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: false, msg: "" });
    const [query, setQuery] = useState("Avengers");

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
                    msg: data.Error, // Corrected to data.Error
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
        let time = setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`);
        }, 800);

        return()=>clearTimeout(time); 
    }, [query]); // Added query as a dependency

    return (
        <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
