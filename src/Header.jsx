import React from 'react';
import {NavLink} from 'react-router-dom'
import Search from './Search';


const Header = () => {
  return (
    <>
    <div className='Header'>
      <div className='Header-nav'> 
        <NavLink to={`/`}>
          <h1>Home</h1>
        </NavLink>
        <h1>Movies</h1>
        <h1>Web Series</h1>
        <NavLink to={`/public`}>
          <h1>Playlist</h1>
        </NavLink>
      </div>
      <div className='Search'>
          <h1>Search:</h1>
        <Search />
      </div>
      <div className='user'>
        <img src="movie-website/src/user.png" alt='user' color='white'/>
      </div>
    </div>
    </>
  );
};

export default Header;
