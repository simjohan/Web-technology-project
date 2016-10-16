import React, { Component } from 'react';


/*
Creates a button, with text as specified in props "btn_text"

To be implemented:
    * Switch between logout / login depending on user state
    * Handle login functionality
 */
export default class Button extends Component {
    render() {
        return (
            <button name="user_state_button" className="button">{this.props.btn_text}</button>
        )
    }
}