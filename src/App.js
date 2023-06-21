
import './App.css';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import SingleMovie from './SingleMovie';
import Error from './Error';



function App() {
  return (
    <div className="App">
    
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="movie/:id" element={<SingleMovie></SingleMovie>}></Route>
        <Route path="*" element={<Error></Error>}></Route>

      </Routes>
    
      
    </div>
  );
}

export default App;
