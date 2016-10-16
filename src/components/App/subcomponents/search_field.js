import React, { Component } from 'react';

export default class SearchField extends Component {

    constructor(props) {
        super(props)

        this.state = {
            searchValue: ""
        }

        this.handleChange = this.handleChange.bind(this);

    }

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
