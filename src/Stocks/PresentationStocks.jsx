import { Component } from "react";
import "./PresentationStocks.css"
import { ImageDescription } from "../Components/ImageDescription";
import { BoutonMainPage } from "../Components/BoutonMainPage";

export class PresentationStocks extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="PresentationStocks">
                <BoutonMainPage />
                <span className="TitrePresentationCalc">Presentation</span>
                <div className="LigneImages">
                    <ImageDescription image="/Stock_Normal.png" description="Here, the merchant can record their stock based on the flavor of their ice cream."/>
                    <ImageDescription image="/Stock_Copy.png" description="At the bottom of the page, a message is automatically generated, which allows them to copy the message in order to send it to their supplier."/>
                </div>

                <div className="LigneImages">
                    <ImageDescription image="/Stock_Management.png" description="Here the merchant can adjust the stocks they want for each flavor. They will be notified at the top of the page wether they are running out of storage space or not."/>
                    <ImageDescription image="/Stock_TooMuch.png" description="Here, you can see a sample stock model that illustrate the different scenarios one might encounter."/>
                </div>
            </div>
        );
    }
}