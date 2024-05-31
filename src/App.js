import React from 'react';
import Home from './Home.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SingleMovie from './SingleMovie.jsx';
import Error from './Error.jsx';
import PublicPL from './PublicPL.jsx';
import "./App.css";
import LoginPage from './LoginPage.jsx';
import SigninPage from './SigninPage.jsx';
import PrivateLogin from './PrivateLogin.jsx';
import PrivatePL from './PrivatePL.jsx';


const App = () => {
  return(
    <div>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='signin' element={<SigninPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/home/movie/:id' element={<SingleMovie/>} />
          <Route path='public' element={<PublicPL/>}/>
          <Route path='*' element={<Error/>} />
          <Route path='/private-login' element={<PrivateLogin/>}/>
          <Route path='private' element={<PrivatePL/>}/>
        </Routes> 
    </div>
  );
}

export default App