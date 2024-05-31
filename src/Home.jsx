import React, { useContext } from 'react'
import { AppContext, useGlobalContext } from './context.js'
import Movies from './Movies.js';
import Header from './Header.jsx';

const Home = () => {
    const {movie} = useGlobalContext(0);

  return (
    <>
    <div className="All">
    <Header/>
    <Movies/>
    </div>
    </>
  )
}

export default Home