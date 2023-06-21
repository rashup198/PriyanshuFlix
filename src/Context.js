import React, { useEffect } from 'react';
import { useState } from 'react';


// Context(wareHouse)
// provider(delivery boy)
// consumer useContext(you)

export const API_URL =`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`

const AppContext = React.createContext();


const AppProvider = ({children}) => {

  const [isloading, setIsLoading] = useState(true);
  const [movie, setMovie]= useState([]);
  const [query, setQuery]= useState("titanic")
  const [isError, setIsError] = useState({show:"false", msg:""})

  const getMovies = async (url) => {
setIsLoading(true);
      try {
        const res = await fetch(url);
        const data= await res.json();
        console.log(data);

        if(data.Response==="True"){
          setMovie(data.Search)
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
      getMovies(`${API_URL}&s=${query}`);
    },400);

    return ()=> clearTimeout(timerout);
    
  },[query])


  return (
    <AppContext.Provider value={{isloading,movie,query, setQuery, isError}}>
      {children}
    </AppContext.Provider>
  )
}

export {AppContext ,AppProvider};
export default AppProvider;
