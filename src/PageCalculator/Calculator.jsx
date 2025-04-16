import { Component } from "react";
import "./Calculator.css"
import { Intro } from "../Components/Intro";
import { PresentationCalculator } from "./PresentationCalculator";
import { BoutonMainPage } from "../Components/BoutonMainPage";

export class Calculator extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="CalculatorPage">
                <BoutonMainPage />
                <Intro titre="Calculator for retailer" description="I was contacted by a shop owner to develop a cash register-style application. He asked for an app that would allow him to easily calculate the total amount of an order. Additionally, he wanted access to his daily revenue at the end of each day. He also wanted to be able to see a graph of hourly sales by product type, in order to optimize his opening hours."/>
                <PresentationCalculator />
            </div>
        );
    }
}