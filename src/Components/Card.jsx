import React from 'react'

const Card = ({item}) => {

 const URL_IMG = 'https://image.tmdb.org/t/p/original/';

  return (
    <div className='card'>
        {/* <p>{item.original_title}</p> */}
        <img src={`${URL_IMG}${item.poster_path}`} alt="poster" />
    </div>
  )
}

export default Card