import React from 'react';
import { Link, NavLink } from 'react-router-dom'

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink key={movie.id} to={`/Movies/${movie.id}`}>
      <span className="saved-movie">{movie.title}</span>
      </NavLink>
    ))}

<Link to="/">
      <button className='home-button'>Home</button>
      </Link>
  </div>
);

export default SavedList;