import { useState } from 'react';
import {moviesData} from './data';
import MovieList from './components/MovieList';
import "./App.css";
import Search from './components/Search';
import AddMovie from './components/AddMovie';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from './components/Details';
import Home from './Home';


function App(){
  
const [movies,setMovies]=useState(moviesData);


/*adding movies*/
const handleAdd =(newMovie) => setMovies([...movies,newMovie]);

return( 
  
  
<div className='App'>


<Router>
  <Routes>
    <Route path="/" element={<Home mv={movies} add={handleAdd}/>}/>
      <Route path="/detail/:id" element={<Details mvs={movies}/>}/>
      
  
   
    
  </Routes>
</Router>
</div>

);
}
export default App;