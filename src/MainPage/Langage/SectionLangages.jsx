import { Component } from "react";
import "./SectionLangages.css"
import { LangageElement } from "./LangageElement";

export class SectionLangages extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="SectionLangages" id="Languages">
                <u className="TitreLangage">Languages</u>

                <span className="TitreSectionLangage">Web</span>

                <div className="SousTitreLangage">
                    <LangageElement langage="HTML"/>
                    <LangageElement langage="CSS"/>
                    <LangageElement langage="JavaScript"/>
                    <LangageElement langage="ReactJS"/>
                    <LangageElement langage="Python"/>
                    <LangageElement langage="JAVA"/>
                    <LangageElement langage="SQL"/>
                </div>

                <span className="TitreSectionLangage">Others</span>

                <div className="SousTitreLangage">
                    <LangageElement langage="C"/>
                    <LangageElement langage="C++"/>
                    <LangageElement langage="OPENGL"/>
                </div>
            </div>
        );
    }
}