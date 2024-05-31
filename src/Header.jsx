import React from 'react';
import {NavLink} from 'react-router-dom'
import Search from './Search';


const Header = () => {
  return (
    <>
    <div className='Header'>
      <div className='Header-nav'> 
        <NavLink to={`/home`}>
          <h1>Home</h1>
        </NavLink>
        <NavLink to={`/home`}>
          <h1>Movies</h1>
        </NavLink>
        <h1>Web Series</h1>
        <NavLink to={`/public`}>
          <h1> Public Playlist</h1>
        </NavLink>
        <NavLink to={`/private-login`}>
          <h1> Private Playlist</h1>
        </NavLink>
      </div>
      <div className='Search'>
          <h1>Search:</h1>
        <Search />
      </div>
      <div className='user'>
        <img src="https://img.icons8.com/?size=100&id=22396&format=png&color=000000" alt='user' />
      </div>
    </div>
    </>
  );
};

export default Header;
