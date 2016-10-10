import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
            <FacebookLoginHandler
                appId="<app id her>"
                autoLoad={true}
                fields="name,email,picture"
                callback={this.responseFacebook}
            />
        )
    }
}
export default App;
