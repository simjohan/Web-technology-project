import React, { Component } from 'react';
import SearchField from "./search_field"
import Button from "./navbar_button"

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
