/**
 * Created by Mats on 13.10.2016.
 */
import React, { Component} from 'react';


export default class UserData extends Component {

    state = {
        img: "",
        name: "",
        loggedIn: ""

    };

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