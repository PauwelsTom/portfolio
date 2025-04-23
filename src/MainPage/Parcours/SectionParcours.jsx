import { Component } from "react";
import "./SectionParcours.css"
import { BoutDeParcours } from "./BoutDeParcours";
import { TextParcours } from "./TextParcours";

export class SectionParcours extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="SectionParcours" id="Parcours">
                <u className="TitreParcours">Career Path</u>
                <div className="Parcours">
                    <div className="LigneParcours">
                        <BoutDeParcours />
                        <BoutDeParcours />
                        <BoutDeParcours />
                        <BoutDeParcours end={true}/>
                    </div>

                    <div className="TextPacours">
                        <TextParcours 
                            titre="Highschool"
                            date="2016 - 2019"
                            texte="Bac S. (specialization: Mathematics)."
                        />

                        <TextParcours 
                            titre="CPGE - MP"
                            date="2019 - 2022"
                            texte="Kind of university only in France, with denser courses than university. MP stands for 'Mathematics and Physics'."
                        />

                        <TextParcours 
                            titre="EPITA - IT Engineering school"
                            date="2022 - 2025"
                            texte="French IT engineering school, did a specialization in image processing."
                        />
                    </div>
                </div>
            </div>

        );
    }
}