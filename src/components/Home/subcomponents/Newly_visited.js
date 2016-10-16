import React, { Component } from 'react';
import Title from "./Title"
import Movie from "./Movie"

export default class Newly_visited extends Component {

   render() {
      return (
         <div className="newly-visited">

            {/*
            *  Render the imported title component and set
            *  the title property to a specific string
            */}
            <Title title="Newly Visisted"/>

            {/*
            *   Render the imported movie components
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
