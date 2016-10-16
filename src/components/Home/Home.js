import React, { Component } from 'react';
import Newest_reviews from "./subcomponents/Newest_reviews";
import Newly_visited from "./subcomponents/Newly_visited";
import "./Home.css";

export default class Home extends Component {
    render() {
        return (

            <div className="home">
               { /* Render the imsported components */ }
               <Newest_reviews />
               <Newly_visited />
            </div>
        );
    }
}
