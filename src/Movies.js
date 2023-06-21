import React from 'react';
import { useContext } from 'react';
import { AppContext } from './Context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const {movie} = useContext(AppContext);
  return (
    <div>
      {
        movie.map((curmovie)=>{
          return(
           <section className='movie-page'>
            <div className='grid grid-4-col container'>
            {
              movie.map((curmovie)=>{
                const {imdbID,Poster,Title} = curmovie;
                return(
                  <NavLink to={`movie/${imdbID}`} key={imdbID}>
                      <div className='card'>
                      <div className='card-info'>
                          <h2>
                            {Title.substring(0,20).length>15 ?`${Title}....` : Title }
                          </h2>
                          <img src={Poster} alt='img'></img>
                      </div>
                      </div>
                  </NavLink>
                )
              })
            }

            </div>
           </section>
          )
        })
      }
    </div>
  )
}

export default Movies
