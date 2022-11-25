import React from 'react';
import NavBar from '../Components/NavBar';
import MovieData from '../Components/MovieData';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className="App">
    <NavBar/>
    <MovieData/>
    <Footer/>
  </div>
  )
}

export default Home