import { useState } from 'react';
import {moviesData} from './data';
import MovieList from './components/MovieList';
import "./App.css";
import Search from './components/Search';
import AddMovie from './components/AddMovie';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



const Home =({mv,add})=>{
  
const [text,setText]=useState('');
const [rating,setRating]=useState(1)

//handletext
const handletext=(e) => setText(e.target.value)
// handle rating
const handleRating =(x) =>setRating(x)


return( 
  <div className='App'>
  <Search rating ={rating} 
  text={text} 
  handletext={handletext}
  handleRating={handleRating}
  />
  <MovieList 
  movies={mv.filter((el) =>
  el.name.toLowerCase().includes(text.toLowerCase().trim())&&
  el.rating >= rating
  )}
  />
  <AddMovie adds={add}/>
  </div>
  );
  };
  export default Home;