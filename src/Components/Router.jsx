import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Landing from '../pages/Landing';

const Router = () => {
  return (
      <BrowserRouter>
      <Routes>
          <Route path='/browse' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Landing/>} />
      </Routes>
      </BrowserRouter>
  )
}

export default Router