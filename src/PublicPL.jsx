import React from 'react';
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';
import Header from './Header';

const PublicPL = () => {
  const { publicPlaylist, removeFromPublicPlaylist } = useGlobalContext();

  const handleDelete = (movieTitle) => {
    removeFromPublicPlaylist(movieTitle);
  };

  return (
    <div className='PublicPlaylist'>
      <Header />
      <h1>Your Public Playlist</h1>
      {publicPlaylist.length === 0 ? (
        <p className='noMovie'>No movies in the playlist.</p>
      ) : (
        <ul>
          {publicPlaylist.map((movie, index) => (
            <li key={index} className='publiclist'>
              <img src={movie.Poster} alt={movie.Title} className='list-poster' />
              <div className='publicContent'>
              <p>{movie.Title}</p>
              <p>Released: {movie.Released}</p>
              <p>Genre: {movie.Genre}</p>
              <p>IMDB Rating: {movie.imdbRating}</p>
              </div>
              <button type='submit' className='delete' onClick={() => handleDelete(movie.Title)}>
          <img src='https://img.icons8.com/?size=100&id=99933&format=png&color=000000' className='delete'/>
          </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PublicPL;
