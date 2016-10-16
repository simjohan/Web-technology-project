/**
 * Created by simenjohansen on 12/10/16.
 */
import React, { Component } from 'react';
import SearchField from "./search_field"
import Button from "./navbar_button"
import UserData from './userdata';


export default class NavBar extends Component {
    render() {
        return (
            <div id="navbar">
                <SearchField />
                <Button btn_text="Login" />
            </div>
        );
    }
}