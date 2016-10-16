import React, { Component } from 'react';

import './App.css';
import NavBar from './subcomponents/navbar'
import Home from "./../Home/Home"
import FacebookLoginHandler from './../../facebookhandler';

class App extends Component {

    // Default props to be used in other functions
    static defaultProps = {
        notLoggedIn: "Not logged in"
    };

    constructor(props) {
        super(props);

        // The state of this component
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


    // We have the response (json) from the API, and here we choose what to do with it, e.g. save it to states.
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
            localStorage.setItem('loggedIn', '');
            localStorage.setItem('userData', [this.state.name, this.state.imgurl]);
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
            localStorage.setItem('loggedIn', 'unknown');
        }



    };

    /*
        The main render function, which renders:
        - Facebook login: <FacebookLoginHandler/> component
        - Navigation bar: <NavBar/> component
        - Titles: <Title/> component
        - Movies: <Movie/> component
     */
    render() {
        /*let pageLink;
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
        }*/
        /*<p>Name: {this.state.name} {pageLink}</p>
        <p>Email: {this.state.email}</p>
        <p>Picture: <img src={this.state.imgurl} alt="Not logged in"/></p>*/

        return (
            <div className="app">
                <FacebookLoginHandler
                    appId="1623658607931496"
                    autoLoad={true}
                    fields="name,email,picture,link,taggable_friends"
                    scope="email, user_friends"
                    callback={this.responseFacebook}
                    loggedInStatus={this.state.loggedIn}
                />
               <NavBar />
               <Home />
            </div>

        )
    }
}
export default App;
