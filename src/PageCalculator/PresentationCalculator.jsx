import { Component } from "react";
import "./PresentationCalculator.css"
import { ImageDescription } from "./ImageDescription";

export class PresentationCalculator extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="PresentationCalculator">
                <span className="TitrePresentationCalc">Presentation</span>
                <div className="LigneImages">
                    <ImageDescription image="/Calc_Normal.png" description="The 'Normal' Mode allows to add or delete products to the list to get the total amount."/>
                    <ImageDescription image="/Calc_Split.png" description="The 'Split' mode allows an order to be divided so that each customer can pay their share."/>
                    <ImageDescription image="/Calc_Promo.png" description="The 'Promo' mode allows the total price to be adjusted to offer discounts to certain customers."/>
                </div>

                <div className="LigneImages">
                    <ImageDescription image="/Calc_Stats.png" description="The 'Stats' mode provides access to the day's revenue (clicking on it shows the breakdown between cash and card payments) and displays how many of each item was sold individually."/>
                    <ImageDescription image="/Calc_Histo.png" description="The 'Graph' mode provides access to a bar chart showing hourly sales by product type (ice cream / crepe / drink)."/>
                </div>
            </div>
        );
    }
}