import { Component } from "react";
import "./Stocks.css"
import { Intro } from "../Components/Intro";
import { PresentationStocks } from "./PresentationStocks";

export class Stocks extends Component {

    render() {
        return (
            <div className="StockPage">
                <Intro titre="Stock manager" description="The same shopkeeper who requested the cash register application asked me to develop an app for inventory management. He wanted an application that would allow him to quickly log his stock, automatically generate his order, and create a personalized message to send to his supplier." />
                <PresentationStocks />
            </div>
        );
    }
}