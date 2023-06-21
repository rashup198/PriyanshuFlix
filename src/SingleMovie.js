import { NavLink, useParams } from "react-router-dom";
import { API_URL } from "./Context"; 
import { useState, useEffect } from "react"; 

const SingleMovie = () => {
  const { id } = useParams();
  console.log(id);

  const [isloading, setIsLoading] = useState(true);
  const [movie, setMovie]= useState("");
  const [setIsError] = useState({show:"false", msg:""})
  

  const getMovies = async (url) => {
    setIsLoading(true);

      try {
        const res = await fetch(url);
        const data= await res.json();
        console.log(data);

        if(data.Response==="True"){
          setMovie(data)
          setIsLoading(false);
        }
        else{
          setIsError({
            show:true,
            msg:data.Error,
          })
        }
      } 
      catch (error) {
        console.log("Error Found" + error);  
      }


  }


  useEffect(() => {
   let timerout= setTimeout(()=>{
      getMovies(`${API_URL}&i=${id}`);
    },400);

    return ()=> clearTimeout(timerout);
    
  },[id])

  if(isloading) {
    return(
      <div className="movie-section">
        <div className="loadig">Loading....</div>
      </div>
    )
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster} alt="" />
        </figure>
        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating} / 10</p>
          <p className="card-text">{movie.Country}</p>
          <NavLink to="/" className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;