import { Component } from "react";
import "./Calculator.css"
import { Intro } from "./Intro";
import { PresentationCalculator } from "./PresentationCalculator";

export class Calculator extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="CalculatorPage">
                <Intro />
                <PresentationCalculator />
            </div>
        );
    }
}