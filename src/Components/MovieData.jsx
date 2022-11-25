import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Header from './Header';
import Card from './Card';

const MovieData = () => {
   // const [error, setError] = useState(null);
   // const [items, setItems] = useState('');
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [result, setResult] = useState([]);
  
   // const URL_IMG = 'https://image.tmdb.org/t/p/original/';
  
  
  
    useEffect(() => {
      axios
        .get(
          "https://api.themoviedb.org/3/movie/popular?api_key=3e07a3b0b9299b4defbab35912cfb27e"
        )
        .then((res) => {
         // console.log("res = ", res);
          const data = res.data;
          setTitle(data.results[1].original_title);
          setImage(data.results[1].backdrop_path);
          setDescription(data.results[1].overview);

          const results = res.data.results;

          setResult(results);

           //console.log(result);

          
          //console.log(results.map((item) => ( item.overview )));
  
        
  
        })
        .catch((err) => console.log("err = ", err));
    }, []);

  
  
  
    return (
      <div className="App">
          <Header image={image} title={title} description={description} />


        <h2 className='title_popular_movie'>Les films les plus récents</h2>
        {result.length === 0 ?
           <div className="loading">
                <h1 style={{color: 'white'}}>CHARGEMENT EN COURS...</h1>
           </div>
        :
         <div className="popular_movie">
         {result.map((item,index) => (
             <Card item={item} key={index}/>
          ))}
           
           

        </div>
            } 

      </div>
    );
}

export default MovieData