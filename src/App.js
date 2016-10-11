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
    static defaultProps = {
        notLoggedIn: "Not logged in"
    };

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            imgurl: "",
            email: "",
            link: ""
        }
    };

    responseFacebook = (response) => {
        console.log(response);
        if (response.status != "unknown"){
            this.setState({
                name: response.name,
                email: response.email,
                imgurl: response.picture.data.url,
                link: response.link
            });
        }else {
            this.setState({
                name: this.props.notLoggedIn,
                email: this.props.notLoggedIn,
                imgurl: this.props.notLoggedIn
            });
        }


    };



    render() {
        return (
            <div>
                <p>Name: <a href={this.state.link} target="_blank">{this.state.name}</a></p>
                <p>Email: {this.state.email}</p>
                <p>Picture: <img src={this.state.imgurl} alt="Not logged in"/></p>


            <FacebookLoginHandler
                appId="<app-id-her>"
                autoLoad={true}
                fields="name,email,picture,link"
                callback={this.responseFacebook}
            /></div>
        )
    }
}
export default App;
