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
    static defaultProps = {
        notLoggedIn: "Not logged in"
    };

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            imgurl: "",
            email: "",
            link: "",
            friends: "",
            indents: [],
            loggedIn: ""
        }
    };

    responseFacebook = (response) => {
        //console.log(response);
        this.setState({loggedIn: response.status});
        console.log("status: " + this.state.loggedIn);
        if (this.state.loggedIn !== 'unknown'){
            this.setState({
                name: response.name,
                email: response.email,
                imgurl: response.picture.data.url,
                link: response.link,
                friends: response.taggable_friends,
            });
            console.log("lengde: " + this.state.friends.data.length);
            for (var i = 0; i < this.state.friends.data.length; i++){
                /*console.log(i);
                 console.log(this.state.friends.data[i].name);*/
                this.state.indents.push(<span className="indent" key={i}>{this.state.friends.data[i].name}</span>)
            }
            //console.log("friends: " + this.state.friends.data);
            //console.log("indents: " + this.state.indents);
        }else {
            this.setState({
                name: this.props.notLoggedIn,
                email: this.props.notLoggedIn,
                imgurl: this.props.notLoggedIn
            });
        }



    };



    render() {
        let pageLink;
        console.log("render status: " + this.state.loggedIn);
        if (this.state.loggedIn === 'unknown'){
            pageLink = (
                <span></span>
            )
        }
        else {
            pageLink = (
                <a href={this.state.link} target="_blank">Link to Facebook page</a>
            )
        }
        return (
            <div>
                <p>Name: {this.state.name} {pageLink}</p>
                <p>Email: {this.state.email}</p>
                <p>Picture: <img src={this.state.imgurl} alt="Not logged in"/></p>
            <FacebookLoginHandler
                appId="1623658607931496"
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
                fields="name,email,picture,link,taggable_friends"
                scope="email, user_friends"
                callback={this.responseFacebook}
                loggedInStatus={this.state.loggedIn}
            /></div>
        )
    }
}
export default App;
