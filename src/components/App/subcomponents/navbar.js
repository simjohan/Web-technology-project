import React, { Component } from 'react';
import SearchField from "./search_field"
import Button from "./navbar_button"

/*
This is the navbar component, which is composed of a search and button component
Props: none
To use: <NavBar>
 */
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
