import { Component } from "react";
import "./SuiteDeBlocs.css"
import { BlocAvecImage } from "./BlocAvecImage";
import { Image1000Bornes, ImageCaisseEnregistreuse, ImageStocks } from "../../Data/Images";

export class SuiteDeBlocs extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="SuiteDeBlocs" id="Projets">
                <BlocAvecImage gauche={false} image={ImageCaisseEnregistreuse} titre="Calculator for a retailer" texte="Custom calculator for a retailer" link="/Projects/Calculator"/>
                <BlocAvecImage gauche={true}  image={ImageStocks} titre="Stock App for retailer" texte="Custom stock managing App for retailer" link="/Projects/Stocks"/>
                <BlocAvecImage gauche={false} image={Image1000Bornes} titre="1000Bornes score counting App" texte="App for 1000Bornes counting" link="/Projects/1000Bornes"/>
            </div>
        );
    }
}