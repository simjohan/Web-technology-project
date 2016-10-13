import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavBar from './navbar'
import Title from "./components/app/Title"
import Movie from "./components/app/Movie"
import FacebookLoginHandler from './facebookhandler';

class App extends Component {
    /*  render() {
     <FacebookLoginHandler />
     return (
     <div className="App">
     <div className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h2>Welcome to React</h2>
     </div>
     <p className="App-intro">
     To get started, edit <code>src/App.js</code> and save to reload.
     </p>
     </div>
     );
     }
     }*/

    constructor(props) {
        super(props);
    };

    responseFacebook = (response) => {
        console.log(response);
    };

    render() {
        return (
            <div className="app">
            <NavBar />
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
            /*<FacebookLoginHandler
                appId="<app id her>"
                autoLoad={true}
                fields="name,email,picture"
                callback={this.responseFacebook}
            />*/
        )
    }
}
export default App;
