import { Component } from "react";
import "./Stocks.css"
import { Intro } from "../Components/Intro";
import { PresentationStocks } from "./PresentationStocks";

export class Stocks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="StockPage">
                <Intro titre="Stock manager" description="" />
                <PresentationStocks />
            </div>
        );
    }
}