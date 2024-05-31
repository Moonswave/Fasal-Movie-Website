import React from 'react';
import Home from './Home.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SingleMovie from './SingleMovie.jsx';
import Error from './Error.jsx';
import PublicPL from './PublicPL.jsx';
import "./App.css";


const App = () => {
  return(
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='movie/:id' element={<SingleMovie/>} />
          <Route path='public' element={<PublicPL/>}/>
          <Route path='*' element={<Error/>} />
        </Routes> 
    </div>
  );
}

export default App