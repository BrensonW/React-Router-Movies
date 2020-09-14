import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movies/Movie.js';
import MovieList from './Movies/MovieList.js'; 
import SavedList from './Movies/SavedList.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);
  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <Router>
        <SavedList list={[ /* This is stretch */]} />
        <Route exact path='/'>
          <MovieList movies={movieList} />
        </Route>
        <Route path='/movies/:id'>
          <Movie />
        </Route>
      </Router>
    </div>
  );

};

export default App;