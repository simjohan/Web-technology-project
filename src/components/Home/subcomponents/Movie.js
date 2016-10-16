import React, { Component } from 'react';

export default class Movie extends Component {

  render() {
    return (
      <li className="movie-item">
        <div className="movie-item-name">
          Title
        </div>
        <div className="movie-item-poster">
            { /* Placeholder image for movies */ }
            <img src={'https://movies.qantaspoints.com/images/website-assets/placeholder-movie.jpg'} alt="movie poster placeholder" />
        </div>
      </li>
    );
  }



}
