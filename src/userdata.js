import React, { Component} from 'react';

export default class UserData extends Component {

    // State of the userdata component
    state = {
        img: "",
        name: "",
        loggedIn: ""

    };

    /**
     *   Renders the userdata with JSX. This is the data we will use in the navbar:
     *   - Name of the user (from facebook api)
     *   - Picture of the user (from facebook api)
     */
    render() {
        this.state.loggedIn = localStorage.getItem('loggedIn');
        let userList = localStorage.getItem('userData').split(',');
        if(this.state.loggedIn === 'unknown'){
            if (userList != null){
                this.state.name = userList[0];
                this.state.img = userList[1];
            }
        }else{
            this.state.name = "";
            this.state.img = "";
        }
        return (
            <span>
                <img src={this.state.img} alt="Not logged in"/>
                <span>{this.state.name}</span>
            </span>
        );
    }
}