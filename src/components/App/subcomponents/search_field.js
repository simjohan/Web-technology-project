import React, { Component } from 'react';

/*
Creates the search field. This will be used to search for movies or users.
 */

export default class SearchField extends Component {

    constructor(props) {
        super(props)

        this.state = {
            searchValue: ""
        }

        this.handleChange = this.handleChange.bind(this);

    }

    /*
    Event handler for changes in the inputfield.
    Current problem: is "one" behind, meaning the input is printet one char after it should. This is because the call is not async. Will be fixed.
     */
    handleChange(event) {
        var value = event.target.value;
        console.log(this.state.searchValue)
        this.setState({searchValue: value});
    }


    render() {
        return (
            <div>
                <input type="text"
                       placeholder="Search for a movie..."
                       name="search"
                       onChange={this.handleChange}
                />
                <label><input type="checkbox" name="do_people_search" />Search for people</label>

            </div>
        );
    }
}
