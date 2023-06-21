import React, { useEffect } from 'react'


// Context(wareHouse)
// provider(delivery boy)
// consumer useContext(you)

const API_URL =`http://www.omdbapi.com/?i=tt3896198&apikey=1358f537&s=titanic`

const AppContext = React.createContext();


const AppProvider = ({children}) => {

  const getMovies = async (url) => {

      try {
        const res = await fetch(url);
        const data= await res.json();
        console.log(data);
      } 
      catch (error) {
        console.log("Error Found" + error);  
      }


  }


  useEffect(() => {
    getMovies(API_URL);
  },[])


  return (
    <AppContext.Provider value={"Rashu"}>
      {children}
    </AppContext.Provider>
  )
}

export {AppContext ,AppProvider};
export default AppProvider;
