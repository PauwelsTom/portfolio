import { Component } from "react";
import "./SectionAboutMe.css"
import { AboutMeElement } from "./AboutMeElement";

export class SectionAboutMe extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="SectionAboutMe" id="AboutMe">
                <u className="TitreAboutMe">About me</u>
                <div className="GrilleAboutMe">
                    <AboutMeElement name="Magician"/>
                    <AboutMeElement name="Penspinning"/>
                    <AboutMeElement name="Sport"/>
                    <AboutMeElement name="Theater"/>
                    <AboutMeElement name="Batterie"/>
                    <AboutMeElement name="Guitare"/>
                    <AboutMeElement name="Rubik's Cube"/>
                    <AboutMeElement name="Astronomy"/>
                    <AboutMeElement name="Karate"/>
                </div>
            </div>
        );
    }
}