import React, { Component } from 'react';
import Title from "./Title"
import Movie from "./Movie"

export default class Newest_reviews extends Component {

  render() {
    return (
      <div className="newest-reviews">

         {/*
         *  Render the imported title component and set
         *  the title property to a specific string
         */}
         <Title title="Newly Reviewed"/>

         {/*
         *  Render the imported movie components
         */}

         <ul className="movie-container">
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
            <Movie />
         </ul>

      </div>
    );
  }



}
