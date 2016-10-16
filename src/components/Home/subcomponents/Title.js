import React, { Component } from 'react';

export default class Title extends Component {

  render() {
    return (
      <div className="title">
         { /* Use the value that is passed into the component through Newly_visited and Newest_reviews files */ }
        <h2> {this.props.title} </h2>
      </div>
    );
  }

}
