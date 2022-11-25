import React from 'react'

const Header = ({image, title, description}) => {

    const URL_IMG = 'https://image.tmdb.org/t/p/original/';

  return (
    <div className='header'>
       <div>
       <h2>{title}</h2>
       <p>{description}</p>
       <a href="/">VOIR PLUS</a>
       </div>
        <img src={`${URL_IMG}${image}`} alt="header" />
    </div>
  )
}

export default Header