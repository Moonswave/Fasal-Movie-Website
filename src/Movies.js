import React from 'react';
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';

function Movies() {
  const { movie, isError } = useGlobalContext();

  return (
    <>
      <section className='movie-page'>
        <div className='grid'>
          {isError.show ? (
            <h1 className='Errormsg'>{isError.msg}</h1>
          ) : (
            movie.length > 0 ? (
              movie.map((curMovie) => {
                const { imdbID, Title, Poster, Year } = curMovie;
                const movieName = Title.length > 15 ? `${Title.substring(0, 15)} ...` : Title;

                if (Poster !== 'N/A') {
                  return (
                    <NavLink to={`movie/${imdbID}`} key={imdbID}>
                      <div className='Card'>
                        <div className='card-info'>
                          <img src={Poster} alt={Title} />
                          <p>
                            {movieName} <br />
                            ({Year})
                          </p>
                        </div>
                      </div>
                    </NavLink>
                  );
                } else {
                  return null;
                }
              })
            ) : (
              <h1 className='Errormsg'>No movies found</h1>
            )
          )}
        </div>
      </section>
    </>
  );
}

export default Movies;
