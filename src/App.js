import React, { Component } from 'react';

import Title from "./components/app/Title"
import Movie from "./components/app/Movie"

class App extends Component {

  render() {

    return (
      <div className="app">

      <div className="newest-reviews">
        <Title title="Nyeste Anmeldelser"/>
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

      <div className="newly-visited">
        <Title title="Nylig Besøkte"/>
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

      </div>
    );
  }

}

export default App;
