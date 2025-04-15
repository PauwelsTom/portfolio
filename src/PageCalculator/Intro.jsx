import { Component } from "react";
import "./Intro.css"

export class Intro extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="IntroCalculator">
                <u className="TitleCalculator">Calculator for retailer</u>
                <p className="DescriptionCalculator">
                    I was contacted by a shop owner to develop a cash register-style application. He asked for an app that would allow him to easily calculate the total amount of an order. Additionally, he wanted access to his daily revenue at the end of each day. He also wanted to be able to see a graph of hourly sales by product type, in order to optimize his opening hours.
                </p>
            </div>
        );
    }
}