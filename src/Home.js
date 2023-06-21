import React, { useContext } from 'react'
import { AppContext } from './Context'

const Home = () => {
  const name= useContext(AppContext);
  return (
    <div>
   
    My home page
    <p>{name}</p>
      
    </div>
  )
}

export default Home
