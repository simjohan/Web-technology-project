import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
            <button name="user_state_button" className="button">{this.props.btn_text}</button>
        )
    }
}