import { Component } from "react";
// import "./MainPage.css"
import { SectionParcours } from "./Parcours/SectionParcours";
import { SectionAboutMe } from "./AboutMe/SectionAboutMe";
import { SectionLangages } from "./Langage/SectionLangages";
import { SuiteDeBlocs } from "./Projets/SuiteDeBlocs";
import { Intro } from "./Intro";
import { BandeauNavigation } from "../Components/BandeauNavigation";

export class MainPage extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <header className='Header'>
                    <BandeauNavigation />
                </header>
                <div className='Body'>
                    <Intro />
                    <SuiteDeBlocs />
                    <SectionLangages />
                    <SectionAboutMe />
                    <SectionParcours />
                </div>
            </div>
        );
    }
}